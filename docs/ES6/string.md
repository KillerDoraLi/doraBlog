# 字符串

## 拓展

### 1. 字符串的 Unicode 表示法

ES6 允许采用 \uxxxx 形式表示一个字符，其中 xxxx 表示字符的 Unicode 码点。<br>

```js
"\u0061";
// "a"
```

但是，这种表示法只限于码点在\u0000~\uFFFF 之间的字符。超出这个范围的字符，必须用两个双字节的形式表示。

```js
"\uD842\uDFB7";
// "𠮷"

"\u20BB7";
// " 7"
```

### 2. 字符串的遍历器接口

ES6 为字符串添加了遍历器接口，使得字符串可以被 for...of 循环。

```js
for (let codePoint of "foo") {
  console.log(codePoint);
}
// "f"
// "o"
// "o"
```

### 3. JSON.stringify() 的改造

UTF-8 标准规定，0xD800 到 0xDFFF 之间的码点，不能单独使用，必须配对使用。比如，\uD834\uDF06 是两个码点，但是必须放在一起配对使用，代表字符 𝌆。这是为了表示码点大于 0xFFFF 的字符的一种变通方法。单独使用\uD834 和\uDF06 这两个码点是不合法的，或者颠倒顺序也不行，因为\uDF06\uD834 并没有对应的字符。<br>

JSON.stringify()的问题在于，它可能返回 0xD800 到 0xDFFF 之间的单个码点。<br>

为了确保返回的是合法的 UTF-8 字符，ES2019 改变了 JSON.stringify()的行为。如果遇到 0xD800 到 0xDFFF 之间的单个码点，或者不存在的配对形式，它会返回转义字符串，留给应用自己决定下一步的处理。

```js
JSON.stringify("\u{D834}"); // ""\\uD834""
JSON.stringify("\uDF06\uD834"); // ""\\udf06\\ud834""
```

## 新增的方法

### 1. **String.fromCodePoint()**

ES5 提供 String.fromCharCode()方法，用于从 unicode 码点返回对应字符，但是这个方法不能识别码点大于 0xFFFF 的字符。

```js
String.fromCharCode(0x20bb7);
// "ஷ"
```

上面代码中，String.fromCharCode()不能识别大于 0xFFFF 的码点，所以 0x20BB7 就发生了溢出，最高位 2 被舍弃了，最后返回码点 U+0BB7 对应的字符，而不是码点 U+20BB7 对应的字符。

---

ES6 提供了 String.fromCodePoint() 方法来解决这个问题。在作用上，正好与下面的 codePointAt()方法相反。

```js
String.fromCodePoint(0x20bb7);
// "𠮷"
String.fromCodePoint(0x78, 0x1f680, 0x79) === "x\uD83D\uDE80y";
// true
```

### 2. **String.raw()**

ES6 还为原生的 String 对象，提供了一个 **raw()** 方法，该方法返回一个连斜杠都被转义的字符串。

```js
String.raw`Hi\n${2 + 3}!`;
// 实际返回 "Hi\\n5!"，显示的是转义后的结果 "Hi\n5!"

String.raw`Hi\u000A!`;
// 实际返回 "Hi\\u000A!"，显示的是转义后的结果 "Hi\u000A!"
```

### 3. **codePointAt()**

Javascript 内部，字符以 UTF-16 的格式存储，每个字符固定为 2 个字节，对于那些需要 4 个字节存储的字符（unicode 码点大于 0xFFFF 的字符），Javascript 会认为它们是两个字符。

```js
// 𠮷 的码点为 0x20BB7;
var s = "𠮷";
s.length // 2
```

### 4. **normalize()**
normalize方法可以接受一个参数来指定normalize的方式，参数的四个可选值如下。

  - NFC，默认参数，表示“标准等价合成”（Normalization Form Canonical Composition），返回多个简单字符的合成字符。所谓“标准等价”指的是视觉和语义上的等价。
  - NFD，表示“标准等价分解”（Normalization Form Canonical Decomposition），即在标准等价的前提下，返回合成字符分解的多个简单字符。
  - NFKC，表示“兼容等价合成”（Normalization Form Compatibility Composition），返回合成字符。所谓“兼容等价”指的是语义上存在等价，但视觉上不等价，比如“囍”和“喜喜”。（这只是用来举例，normalize方法不能识别中文。）
  - NFKD，表示“兼容等价分解”（Normalization Form Compatibility Decomposition），即在兼容等价的前提下，返回合成字符分解的多个简单字符。

```js
  '\u004F\u030C'.normalize('NFC').length // 1
  '\u004F\u030C'.normalize('NFD').length // 2
```
上面代码表示，NFC参数返回字符的合成形式，NFD参数返回字符的分解形式。

不过，normalize方法目前不能识别三个或三个以上字符的合成。这种情况下，还是只能使用正则表达式，通过 Unicode 编号区间判断。

### 5. **includes()**
返回布尔值，表示是否找到了参数字符串

```js
  "foo".includes("o"); // true
  "foo".includes("x"); // false
```

### 6. **startsWith()** 和 **endsWith()**
返回布尔值，表示是否以参数字符串开头/结尾。

```js
  "foo".startsWith("f"); // true
  "foo".startsWith("x"); // false
  "foo".endsWith("o"); // true
  "foo".endsWith("x"); // false
```

### 7. **repeat()**
返回一个新字符串，表示将原字符串重复 n 次。

```js
  "foo".repeat(3); // "foofoofoo"
```

### 8. **padStart()** 和 **padEnd()**
返回一个新字符串，表示根据指定的长度将原字符串左侧填充或右侧填充。
```js
  "foo".padStart(5, "x"); // "xxfoo"
  "foo".padEnd(5, "x"); // "fooxx"
```

### 9. **trimStart()** 和 **trimEnd()**
返回一个新字符串，表示去除原字符串左侧或右侧的空白字符。
```js
  " foo ".trimStart(); // "foo "
  " foo ".trimEnd(); // " foo"
```

### 10. **matchAll()**
返回一个类似数组的迭代器，表示字符串中满足正则表达式的所有匹配项。

```js
  "foo".matchAll(/\w/g); // ["f", "o", "o"]
```

### 11. **replaceAll()**
返回一个新字符串，表示将所有满足正则表达式的匹配项替换为新的字符串。

```js
  "foo".replaceAll("o", "x"); // "fxx"
```

### 12. **at()**
返回字符串中指定位置的字符。

```js
  "foo".at(1); // "o"
```