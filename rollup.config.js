import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import cleanup from 'rollup-plugin-cleanup';

export default [
    {
        input: './src/index.js',
        output: {
            dir: 'dist',
            format: 'cjs',
            entryFileNames: '[name].cjs.js',
        },
        plugins: [resolve(), commonjs(), typescript(), terser(), cleanup(),
            json({
            // 默认情况下将解析所有JSON文件,
            // 但您可以专门包含/排除文件
            include: 'node_modules/**',
            exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],
          
            // 对于 tree-shaking, 属性将声明为
            // 变量, 使用 `var` 或者 `const`
            preferConst: true, // 默认是 false
          
            // 为生成的默认导出指定缩进 —
            // 默认为 't'
            indent: '  ',
          
            // 忽略缩进并生成最小的代码
            compact: true, // 默认是 false
          
            // 为JSON对象的每个属性生成一个命名导出
            namedExports: true // 默认是 true
          })],
    }, {
        input: './src/index.js',
        output: {
            dir: 'dist',
            format: 'esm',
            entryFileNames: '[name].esm.js',
        },
        plugins: [resolve(), commonjs(), typescript(), terser(), cleanup(),
            json({
                // 默认情况下将解析所有JSON文件,
                // 但您可以专门包含/排除文件
                include: 'node_modules/**',
                exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],
              
                // 对于 tree-shaking, 属性将声明为
                // 变量, 使用 `var` 或者 `const`
                preferConst: true, // 默认是 false
              
                // 为生成的默认导出指定缩进 —
                // 默认为 't'
                indent: '  ',
              
                // 忽略缩进并生成最小的代码
                compact: true, // 默认是 false
              
                // 为JSON对象的每个属性生成一个命名导出
                namedExports: true // 默认是 true
              })],
    }
];