# Terria Map
こちらは、PLATEAU VIEWのソースコードをforkしてカスタマイズしたものです。
元のレポジトリは[こちら](https://github.com/Project-PLATEAU/PLATEAU-VIEW)です。

本レポジトリはローカル環境を前提として、CityGMLの表示機能を拡張しています。
#### 前提と事前準備
- Node.js v16.0 以降
- yarn v1.22.0 以降
#### 手順
##### TerriaJs(InfoLoungeLLC)をpackagesにクローン

```bash
mkdir packages && cd packages
git clone git@github.com:InfoLoungeLLC/terriajs.git terriajs
cd ..
```

#####  nodejs依存モジュールのインストール

```bash
export NODE_OPTIONS=--max_old_space_size=4096
yarn
```

##### PlateauViewのビルド

下記コマンドを実行するとソースコードの変更が自動的にビルドに反映されます。
Ctrl + cで停止します。

```bash
yarn gulp:watch
```

##### PlateauViewの起動

上記の`yarn gulp:watch`の実行中に以下のコマンドを実行します。(ソースコードを変更すると自動で反映されます。)

```bash
yarn start
```

[localhost:3001](http://localhost:3001)を開くと、PlateauViewを見ることができます。

##### PlateauViewの停止

下記コマンドを実行します。

```bash
yarn stop
```

##### 動かす際に発生したエラーと解決方法。
- `yarn install`できなかった。
  -  `git://github.com/`で書かれていたいくつかのパッケージがインストールできなかった
    - gitconfigを書き換えた
    ```bash
    git config url."https://".insteadOf git://
    ```
