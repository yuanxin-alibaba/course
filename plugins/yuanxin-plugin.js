function YuanxinPlugin(options) {}

YuanxinPlugin.prototype.apply = function (compiler) {
    compiler.plugin('emit', function (compilation, callback) {
        // 从服务端获取配置文件
        const getListTask = Promise.resolve(JSON.stringify({a: '真的真的', b: '要做一个'}));
        // console.log('compilercompilercompilercompiler::', compiler);
        getListTask
            .then(list => {
                compilation.assets['config.json'] = {
                    source: function() {
                        return list;
                    },
                    size: function() {
                        return list.length;
                    }
                };
                callback();
            });
    });
};

module.exports = YuanxinPlugin;
