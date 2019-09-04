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