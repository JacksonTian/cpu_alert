#!/usr/bin/env node

'use strict';

const cp = require('child_process');

const notifier = require('node-notifier');

cp.exec('ps aux', function (err, stdout, stderr) {
    stdout
        .split('\n')
        .slice(1)
        .filter((d) => {
            return d;
        })
        .map((line) => {
            const [user, pid, cpu, mem, ...rest] = line.split(/\s+/);
            const $cpu = parseFloat(cpu);

            if ($cpu > 100) {
                // Object
                notifier.notify({
                    title: 'CPU 占用过高提醒',
                    message: `PID：${pid}, CPU: ${cpu}%, Command: ${rest.slice(6).join(' ')}`
                });
                console.log(`PID：${pid}, CPU: ${cpu}%, Command: ${rest.slice(6).join(' ')}`);
            }
        });
    process.exit(0);
});
