var mapContainer = document.getElementById('map'), // 지도를 표시할 div

mapOption = {
  center: new kakao.maps.LatLng(37.5512167, 126.9881884), // 지도의 중심좌표
  level: 5 // 지도의 확대 레벨
};

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption); 