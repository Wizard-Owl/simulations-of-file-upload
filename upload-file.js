function uploadStart(callback) {
    console.log('Начало загрузки файла...');

    let progress = 0;
    let intervalUpload = setInterval(() => {
        progress += Math.round(Math.random() * 10) + 5

        if (progress >= 100) {
            clearInterval(intervalUpload);
            console.log(`Прогресс загрузки 100%`);

            if (callback) {
                callback();
            }
        } else {
            console.log(`Прогресс загрузки ${progress}%`);
        }
    }, 2000);
}

function uploadCompleted() {
    console.log('Загрузка файла успешно завершена');
    console.log('Обработка файла...');
    setTimeout(() => {
        console.log('Файл успешно обработан');

        console.log('Сохранение файла...');
        setTimeout(() => {
            console.log('Файл успешно сохранен и готов к использованию!');
        }, 1000);
    }, 2000);
}