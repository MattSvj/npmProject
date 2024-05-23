Secure Password Generator
Библиотека secure-password-generator предоставляет простой способ генерации безопасных и случайных паролей с возможностью настроить различные параметры, такие как длина пароля, использование букв, цифр и специальных символов.

Установка
Вы можете установить secure-password-generator с помощью npm:
    npm install secure-password-generator

Использование
Пример использования для генерации пароля длиной 12 символов с буквами и цифрами:

    const generatePassword = require('secure-password-generator');

    const password = generatePassword(12, { letters: true, numbers: true, symbols: false });
    console.log(password);

Опции
generatePassword(length, options)

length: Длина генерируемого пароля (по умолчанию 12 символов).
options: Объект с настройками генерации пароля:
letters: Использование букв (по умолчанию true).
numbers: Использование цифр (по умолчанию true).
symbols: Использование специальных символов (по умолчанию false).