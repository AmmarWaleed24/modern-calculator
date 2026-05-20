const resultInput = document.getElementById('result');

// إضافة الأرقام والعمليات للشاشة
function appendValue(value) {
    if (resultInput.value === '0' && value !== '.') {
        resultInput.value = value;
    } else {
        resultInput.value += value;
    }
}

// مسح الشاشة بالكامل (C)
function clearDisplay() {
    resultInput.value = '';
}

// مسح آخر خانة فقط (DEL)
function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}

// حساب النتيجة (=)
function calculate() {
    try {
        // eval تقوم بحساب المعادلات المكتوبة كنصوص تلقائياً
        if (resultInput.value !== '') {
            resultInput.value = eval(resultInput.value);
        }
    } catch (error) {
        resultInput.value = 'Error';
    }
}
