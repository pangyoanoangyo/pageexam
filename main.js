var header = document.querySelector('#headers');  // 이상하게 let으로 하면 안됨
header.innerHTML =`<header class="pb-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
        <img src="images/sw_logo_1.png" alt="logo" width="150" height="60" class="me-2">
        <span class="fs-7">같이 성장하는 기업<br>언제나 함께하는 기업<br>성공하는 솔루션을 제공하는 기업</span>
      </a>
</header>`;



var footer = document.querySelector('#footers');  // 이상하게 let으로 하면 안됨
footer.innerHTML =`
<footer class="container d-flex flex-wrap justify-content-between bg-dark align-items-center py-3 my-4 border-top">
<p class="col-md-6 mb-0">COPYRIGHT © 2008~2023 <br>SOLUWIN CO., LTD. ALL RIGHTS RESERVED.</p>
<p class="col-md-6 mb-0">사업자등록증 : 129-86-65195<br>
  주소 : 경기도 용인시 수지구 신수로 767 분당수지유타워 A동 622호 <br>
  TEL : 031)272-0737  /  FAX : 031)276-0737<br>
  e-mail : jsl1005@daum.net<br>
  <!-- <span id="soluwin_font" >Soluwin</span > -->
</p>
<!-- <ul class="nav col-md-4 justify-content-end">
<li class="nav-item"><a href="#" class="nav-link px-2">맨위</a></li>  
</ul> -->
</footer>  `;



var btn_test = () => {
    console.log('김상필');
    }

btn_test();