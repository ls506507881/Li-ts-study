- TS 微软发明的
- JS 网景发明的
```
每一门语言都是由人发明的，人总会犯错，所以每一门语言都会有一些错误，TS主要是用来解决JS的一些错误，和完善JS。
```
### 前置知识
- 你要对 npm 比较熟悉
- 你要对命令行比较熟悉
- 你要对 ES 6 比较熟悉
- 你要对 class 比较熟悉

### 安装
npm install typescript@2.9.2 -g
  检查安装成功与否
  tsc -help 
  tsserver -h
npm install ts-node@7.0.0 -g
想尝试新版本可以去掉 @2.9.2 和 @7.0.0

### 调试
- 创建 tsdemo/1.ts 作为我们的第一个 TS 文件
- 在文件里写一句 console.log('hello world') 保存
- Windows 用户注意了，这里需要单独运行一些命令（Linux 用户和 macOS 用户不用执行）
  ```
    npm init -y
    npm i -D ts-node typescript
  ```
- 创建 tsdemo/.vscode/launch.json 文件，内容如下
  ```
    {
      "configurations": [
        {
        "name": "ts-node",
        "type": "node",
        "request": "launch",
        "program": "注意看这里，要写成ts-node对应的可执行文件，Windows 用户注意了，你应该写成 ${workspaceRoot}/node_modules/ts-node/dist/bin.js",
        "args": ["${relativeFile}"],
        "cwd": "${workspaceRoot}",
        "protocol": "inspector"
        }
      ]
    }
  ```
- 打开 tsdemo/1.js，vscode 左边栏选择虫子，找到调试选项，选择 ts-node，然后点击调试
  在调试控制台就可以看到输出结果了，（请确保你选中的是 tsdemo/1.ts）

### TS 官方教程
[五分钟教程](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

参考文章：https://segmentfault.com/a/1190000011935122

### 构建你的第一个TypeScript文件＃
在编辑器中，键入以下JavaScript代码greeter.ts：
```
  function greeter(person) {
      return "Hello, " + person;
  }

  let user = "Jane User";

  document.body.textContent = greeter(user);
```
运行之后会有一个报错： document is not defined
这个报错出现的**原因：** 没有放到页面，所以就没有document

### Tsc是什么
- 1.浏览器可以直接运行JS
- 2.浏览器不能直接运行TS
- 3.*（推导出：）* 要把TS 变成 JS，才能运行在浏览器运行

把TS => JS 的工具，就叫做tsc

**tsc: Type Script Compiler (TS编译器)**

命令行运行 `tsc greeter.ts`
就会把 greeter.ts 变成 greeter.js

```
function greeter(person:string) {
  return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);
```
参数后面+ : string
命令行再重新运行 `tsc greeter.ts`
发现编译出的文件 greeter.js 没什么变化

在 greeter.ts 中 `let user = [0, 1, 2];`
命令行再重新运行 `tsc greeter.ts`
出现一个报错：
> greeter.ts(7,37): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.

user 要一个字符串，但是参数却是一个数组
编译JS失败
