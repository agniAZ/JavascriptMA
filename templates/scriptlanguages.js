let scriptlanguages = `
  <section class="scriptlanguages">
  <div class="row ">
  From Wikipedia, the free encyclopedia
Jump to navigationJump to search
Not to be confused with JScript, Java (programming language), or Javanese script.
For the uses of JavaScript on Wikipedia, see Wikipedia:JavaScript.
JavaScript
Paradigm	event-driven, functional, imperative
Designed by	Brendan Eich of Netscape initially; others have also contributed to the ECMAScript standard
First appeared	December 4, 1995; 25 years ago[1]
Stable release	
ECMAScript 2020[2] / June 2020; 11 months ago
Preview release	
ECMAScript 2021
Typing discipline	Dynamic, weak, duck
Filename extensions	
.js.cjs.mjs[3]
Major implementations
V8, JavaScriptCore, SpiderMonkey, Chakra
Influenced by
Java,[4][5] Scheme,[5] AWK,[6] HyperTalk[7]
Influenced
TypeScript, CoffeeScript, AssemblyScript, ActionScript, Dart, Objective-J, Opa, Haxe
 JavaScript at Wikibooks
JavaScript (/ˈdʒɑːvəˌskrɪpt/),[8] often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.[9] JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.

Alongside HTML and CSS, JavaScript is one of the core technologies of the World Wide Web.[10] Over 97% of websites use it client-side for web page behavior,[11] often incorporating third-party libraries.[12] All major web browsers have a dedicated JavaScript engine to execute the code on the user's device.

As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).

The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O.

JavaScript engines were originally used only in web browsers, but they are now core components of other software systems, most notably servers and a variety of applications.

  </div>
  <div class="row">
  <div class="col-12">
  <div class="row">
Contents
<div class="row">
1	History
</div>
<div class="row">
1.1	Creation at Netscape
</div>
<div class="row">
1.2	Adoption by Microsoft
</div>
<div class="row">
1.3	The rise of JScript
</div>
<div class="row">
1.4	Growth and standardization
<div class="row">
1.5	Reaching maturity
</div>
<div class="row">
2	Trademark
</div>
<div class="row">
3	Website client-side usage
</div>
<div class="row">
3.1	Examples of scripted behavior
</div>
<div class="row">
3.2	Libraries and frameworks
</div>
<div class="row">
4	Other usage
</div>
<div class="row">
5	Features
</div>
<div class="row">
5.1	Imperative and structured
</div>
<div class="row">
5.2	Weakly typed
</div>
<div class="row">
5.3	Dynamic
</div>
<div class="row">
5.4	Object-orientation (prototype-based)
</div>
<div class="row">
5.5	Functional
</div>
<div class="row">
5.6	Delegative</div>
<div class="row">
5.7	Miscellaneous</div>
<div class="row">
5.8	Vendor-specific extensions</div>
<div class="row">
6	Syntax</div>
<div class="row">
6.1	Simple examples</div>
<div class="row">
6.2	More advanced example</div>
<div class="row">
7	Security</div>
<div class="row">
7.1	Cross-site vulnerabilities</div>
<div class="row">
7.2	Misplaced trust in the client</div>
<div class="row">
7.3	Misplaced trust in developers</div>
<div class="row">
7.4	Browser and plugin coding errors</div>
<div class="row">
7.5	Sandbox implementation errors</div>
<div class="row">
7.6	Hardware vulnerabilities</div>
<div class="row">
8	Development tools</div>
<div class="row">
9	Related technologies</div>
<div class="row">
9.1	Java</div>
<div class="row">
9.2	JSON</div>
<div class="row">
9.3	WebAssembly</div>
<div class="row">
9.4	Transpilers</div>
<div class="row">
10	References</div>
<div class="row">
11	Further reading</div>
<div class="row">
12	External links</div>
</div>
History
Creation at Netscape
The Mosaic web browser was released in 1993. As the first browser with a graphical user interface accessible to non-technical people, it played a prominent role in the rapid growth of the nascent World Wide Web.[13] The lead developers of Mosaic then founded the Netscape corporation, which released a more polished browser, Netscape Navigator, in 1994. Navigator quickly became the most used browser.[14]

During these formative years of the Web, web pages could only be static, lacking the capability for dynamic behavior after the page was loaded in the browser. There was a desire in the burgeoning web development scene to remove this limitation, so in 1995, Netscape decided to add a scripting language to Navigator. They pursued two routes to achieve this: collaborating with Sun Microsystems to embed the Java programming language, while also hiring Brendan Eich to embed the Scheme language.[5]

Netscape management soon decided that the best option was for Eich to devise a new language, with syntax similar to Java and less like Scheme or other extant scripting languages.[4][5] Although the new language and its interpreter implementation were called LiveScript when first shipped as part of a Navigator beta in September 1995, the name was changed to JavaScript for the official release in December.[5][1][15]

The choice of the JavaScript name has caused confusion, sometimes giving the impression that it is a spin-off of Java. Since Java was the hot new programming language at the time, this has been characterized as a marketing ploy by Netscape to give its own new language cachet.[16]

Adoption by Microsoft
Microsoft debuted Internet Explorer in 1995, leading to a browser war with Netscape. On the JavaScript front, Microsoft reverse-engineered the Navigator interpreter to create its own, called JScript.

JScript was first released in 1996, alongside initial support for CSS and extensions to HTML. Each of these implementations was noticeably different from their counterparts in Navigator.[17][18] These differences made it difficult for developers to make their websites work well in both browsers, leading to widespread use of "best viewed in Netscape" and "best viewed in Internet Explorer" logos for several years.[17][19]

The rise of JScript
In November 1996, Netscape submitted JavaScript to ECMA International, as the starting point for a standard specification that all browser vendors could conform to. This led to the official release of the first ECMAScript language specification in June 1997.

The standards process continued for a few years, with the release of ECMAScript 2 in June 1998 and ECMAScript 3 in December 1999. Work on ECMAScript 4 began in 2000.

Meanwhile, Microsoft gained an increasingly dominant position in the browser market. By the early 2000s, Internet Explorer's market share reached 95%.[20] This meant that JScript became the de facto standard for client-side scripting on the Web.

Microsoft initially participated in the standards process and implemented some proposals in its JScript language, but eventually it stopped collaborating on ECMA work. Thus ECMAScript 4 was mothballed.

Growth and standardization
During the period of Internet Explorer dominance in the early 2000s, client-side scripting was stagnant. This started to change in 2004, when the successor of Netscape, Mozilla, released the Firefox browser. Firefox was well received by many, taking significant market share from Internet Explorer.[21]

In 2005, Mozilla joined ECMA International, and work started on the ECMAScript for XML (E4X) standard. This led to Mozilla working jointly with Macromedia (later acquired by Adobe Systems), who were implementing E4X in their ActionScript 3 language, which was based on an ECMAScript 4 draft. The goal became standardizing ActionScript 3 as the new ECMAScript 4. To this end, Adobe Systems released the Tamarin implementation as an open source project. However, Tamarin and ActionScript 3 were too different from established client-side scripting, and without cooperation from Microsoft, ECMAScript 4 never reached fruition.

Meanwhile, very important developments were occurring in open-source communities not affiliated with ECMA work. In 2005, Jesse James Garrett released a white paper in which he coined the term Ajax and described a set of technologies, of which JavaScript was the backbone, to create web applications where data can be loaded in the background, avoiding the need for full page reloads. This sparked a renaissance period of JavaScript, spearheaded by open-source libraries and the communities that formed around them. Many new libraries were created, including jQuery, Prototype, Dojo Toolkit, and MooTools.

Google debuted its Chrome browser in 2008, with the V8 JavaScript engine that was faster than its competition.[22][23] The key innovation was just-in-time compilation (JIT),[24] so other browser vendors needed to overhaul their engines for JIT.[25]

In July 2008, these disparate parties came together for a conference in Oslo. This led to the eventual agreement in early 2009 to combine all relevant work and drive the language forward. The result was the ECMAScript 5 standard, released in December 2009.

Reaching maturity
Ambitious work on the language continued for several years, culminating in an extensive collection of additions and refinements being formalized with the publication of ECMAScript 6 in 2015.[26]

The draft specification is currently maintained openly on GitHub, and ECMAScript editions are produced via regular annual snapshots.[27] Potential revisions to the language are vetted through a comprehensive proposal process.[28][29] Now, instead of edition numbers, developers check the status of upcoming features individually.[27]

The current JavaScript ecosystem has many libraries and frameworks, established programming practices, and increased usage of JavaScript outside of web browsers. Plus, with the rise of single-page applications and other JavaScript-heavy websites, a number of transpilers have been created to aid the development process.[30]

Trademark
"JavaScript" is a trademark of Oracle Corporation in the United States.[31][32]

Website client-side usage
JavaScript is the dominant client-side scripting language of the Web, with 97% of websites using it for this purpose.[11] Scripts are embedded in or included from HTML documents and interact with the DOM. All major web browsers have a built-in JavaScript engine that executes the code on the user's device.

Examples of scripted behavior
Loading new web page content without reloading the page, via Ajax or a WebSocket. For example, users of social media can send and receive messages without leaving the current page.
Web page animations, such as fading objects in and out, resizing, and moving them.
Playing browser games.
Controlling the playback of streaming media.
Generating pop-ups.
Validating input values of a web form before the data is sent to a web server.
Logging data about the user's behavior then sending it to a server. The website owner can use this data for analytics, ad tracking, and personalization.
Libraries and frameworks
Over 80% of websites use a third-party JavaScript library or web framework for their client-side scripting.[12]

jQuery is by far the most popular library, used by over 75% of websites.[12] Facebook created the React library for its website and later released it as open source; other sites, including Twitter, now use it. Likewise, the Angular framework created by Google for its websites, including YouTube and Gmail, is now an open source project used by others.[12]

In contrast, the term "Vanilla JS" has been coined for websites not using any libraries or frameworks, instead relying entirely on standard JavaScript functionality.[33]

Other usage
The use of JavaScript has expanded beyond its web browser roots. JavaScript engines are now embedded in a variety of other software systems, both for server-side website deployments and non-browser applications.

Initial attempts at promoting server-side JavaScript usage were Netscape Enterprise Server and Microsoft's Internet Information Services,[34][35] but they were small niches.[36] Server-side usage eventually started to grow in the late 2000s, with the creation of Node.js and other approaches.[36]

Electron, Cordova, React Native, and other application frameworks have been used to create many applications with behavior implemented in JavaScript. Other non-browser applications include Adobe Acrobat support for scripting PDF documents[37] and GNOME Shell extensions written in JavaScript.[38]

JavaScript has recently begun to appear in some embedded systems, usually by leveraging Node.js.[39][40][41]

Features
The following features are common to all conforming ECMAScript implementations, unless explicitly specified otherwise.

Imperative and structured
JavaScript supports much of the structured programming syntax from C (e.g., if statements, while loops, switch statements, do while loops, etc.). One partial exception is scoping: originally JavaScript only had function scoping with var; then block scoping was added in ECMAScript 2015 with the keywords let and const. Like C, JavaScript makes a distinction between expressions and statements. One syntactic difference from C is automatic semicolon insertion, which allow semicolons (which terminate statements) to be omitted.[42]

Weakly typed
JavaScript is weakly typed, which means certain types are implicitly cast depending on the operation used.[43]

The binary + operator casts both operands to a string unless both operands are numbers. This is because the addition operator doubles as a concatenation operator
The binary - operator always casts both operands to a number
Both unary operators (+, -) always cast the operand to a number
Values are cast to strings like the following:[43]

Strings are left as-is
Numbers are converted to their string representation
Arrays have their elements cast to strings after which they are joined by commas (,)
Other objects are converted to the string [object Object] where Object is the name of the constructor of the object
Values are cast to numbers by casting to strings and then casting the strings to numbers. These processes can be modified by defining toString and valueOf functions on the prototype for string and number casting respectively.

JavaScript has received criticism for the way it implements these conversions as the complexity of the rules can be mistaken for inconsistency.[44][43] For example, when adding a number to a string, the number will be cast to a string before performing concatenation, but when subtracting a number from a string, the string is cast to a number before performing subtraction.

</div>
  </section>

`;


