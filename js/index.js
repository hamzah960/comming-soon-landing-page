var countDownDate = new Date();           //نضع التاريخ الحالي في متغير 

//تاريخ الانطلاق بعد 6 اشهر 

//countDownDate = new Date(2022 , 6, 01); 
countDownDate = new Date(countDownDate.getFullYear() +1 , countDownDate.getMonth() -6, 01);

// نستخدم دالة setInterval وهي دالة تقوم بتنفيذ دالة او امر معين كل مدة زمنية محدده 
var x = setInterval(function() {
     
    var now = new Date();
    var diff = countDownDate - now;      //الفرق او المدة الزمنية بين التاريخين ملاحظة ستكون النتيجة بالملي ثانية 
    
    //اولا نقوم بحساب عدد الاشهر 
    //عددالاشهر = الفرق بالملي ثانية   / الملي ثانية بالشهر 
    // عدد الملي ثانية بالشهر = 1000 * 60 * 60 * 24 * 30
    var months = Math.floor(diff/(1000 * 60 * 60 * 24 * 30));
    //math.floor تستخدم لالغاء القيم العشرية 

    //ثانيا نحسب عدد الايام 
    //عدد الايام = متبقي القسمة من الاشهر بالملي ثانية / الملي ثانية باليوم 
    var days = Math.floor((diff %(1000 * 60 * 60 * 24 * 30))/(1000 * 60 * 60 * 24));

    // ثالثا نحسب عدد الساعات
    var hours = Math.floor((diff %(1000 * 60 * 60 * 24))/(1000 * 60 * 60));

    // رابعا نحسب عدد الدقائق
    var minutes = Math.floor((diff %(1000 * 60 * 60))/(1000 * 60));

    // نحسب عدد الثواني
    var seconds = Math.floor((diff %(1000 * 60))/(1000));

    // نضمن المتغيرات 
    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);

// كود جافا سكريبت للتحقق من المدخلات
// هذا كود بوتستراب جاهز
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
