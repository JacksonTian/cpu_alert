# cpu_alert

高 CPU 占用进程告警器

## Installation

```sh
npm i @jacksontian/cpu_alert -g
```

## Configuration

```sh
crontab -e
```

Add the following crontab expression.

```crontab
* * * * * cpu_alert
```

## License

Under the [MIT](./LICENSE) License.
