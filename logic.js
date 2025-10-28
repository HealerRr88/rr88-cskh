
  document.getElementsByClassName("download-app")[0].addEventListener("click", function(e) {
    e.preventDefault();
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
      window.location.href = "https://images.1097638.com/wsd-images-prod/rr88f4/merchant_resource/android/rr88f4_2.4.67_20250425190143.apk";
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      window.location.href = "https://images.1097638.com/wsd-images-prod/rr88f4/merchant_resource/mobileconfig/rr88f4_2.4.3_20250425190122.mobileconfig";
    } else {
      alert("Vui lòng tải ứng dụng trên điện thoại Android hoặc iOS.");
    }
  });
