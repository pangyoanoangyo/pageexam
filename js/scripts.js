/*!
* Start Bootstrap - Small Business v5.0.5 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

var header = document.querySelector('#headers');  // 이상하게 let으로 하면 안됨
header.innerHTML =`<nav class="navbar navbar-expand-lg border-bottom ">
            <div class="container px-5">
                <a id="logoId"class="navbar-brand" href="#!">
                  <img src="./images/sw_logo_1.png" width="150px;">
                  <div id="navId">
                    같이 성장하는 기업<br>
                    언제나 함께하는 기업<br>
                    성공하는 솔루션의 기업
                  </div>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link active text-dark text-decoration-none" aria-current="page" href="#!">Home</a></li>
                        <li class="nav-item"><a class="nav-link text-dark text-decoration-none" href="#!">About</a></li>
                        <li class="nav-item"><a class="nav-link text-dark text-decoration-none" href="#!">Contact</a></li>
                        <li class="nav-item"><a class="nav-link text-dark text-decoration-none" href="#!">Services</a></li>
                    </ul>
                </div>
            </div>
        </nav>`;



var footer = document.querySelector('#footers');  // 이상하게 let으로 하면 안됨
footer.innerHTML =`<footer class="py-4 bg-dark">
<p class="col-md-6 mb-3 text-white ">COPYRIGHT © 2008~2023 <br>SOLUWIN CO., LTD. ALL RIGHTS RESERVED.</p>
<p class="col-md-6 mb-3 text-white">사업자등록증 : 129-86-65195<br>
  주소 : 경기도 용인시 수지구 신수로 767 분당수지유타워 A동 622호 <br>
  TEL : 031)272-0737  /  FAX : 031)276-0737<br>
  e-mail : jsl1005@daum.net<br>
</p>
</footer>  `;



var btn_test = () => {
    console.log('김상필');
    }

btn_test();