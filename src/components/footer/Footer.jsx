import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="description">
          <h2>الراقى للتوصيل</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
          </p>
        </div>
        <div className="sections">
          <h2>الاقسام</h2>
          <div className="links">
            <HashLink className="link" smooth="true" to="/#home">الرئيسية</HashLink>
            <HashLink className="link" smooth="true" to="/#choose-us">لماذا تختارنا</HashLink>
            <HashLink className="link" smooth="true" to="/#car-types">انواع سيارتنا</HashLink>
            <HashLink className="link" smooth="true" to="/#reviews">تقييمات العملاء</HashLink>
            <HashLink className="link" smooth="true" to="/#faq">الاسئلة الشائعة</HashLink>
            <HashLink className="link" smooth="true" to="/#contact-us">تواصل معنا</HashLink>
            <Link className="link" to="/prices">اسعارنا</Link>
          </div>
        </div>
        <div className="quick-links">
          <h2>روابط سريعة</h2>
          <div className="links">
            <Link className="link" smooth="true" to="/">برنامج الولاء و المكافات</Link>
            <Link className="link" to="/travel-partners">لوكالات السفر و السياحة</Link>
            <Link className="link" smooth="true" to="/">الشروط و الاحكام</Link>
            <Link className="link" smooth="true" to="/">سياسة الخصوصية</Link>
            <Link className="link" to="/partner">كن شريكا</Link>
            <Link className="link" to="/blogs">مدونتنا</Link>
            <Link className="link" smooth="true" to="/">الفنادق</Link>
            <Link className="link" smooth="true" to="/">العروض</Link>
          </div>
        </div>
        <div className="social-media">
          <h2>تواصل معنا</h2>
          <div className="links">
            <a className="link" href="#" target="_blank" rel="noreferrer" >
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="5" fill="white" />
                <path d="M12.9762 18V12.5262H14.906L15.1949 10.393H12.9761V9.03102C12.9761 8.4134 13.1562 7.99252 14.0865 7.99252L15.273 7.99199V6.08405C15.0678 6.0581 14.3634 6 13.5441 6C11.8334 6 10.6623 6.99412 10.6623 8.81982V10.393H8.72754V12.5262H10.6623V17.9999H12.9762V18Z" fill="#8D8BA7" />
              </svg>
              <p>Facebook</p>
            </a>
            <a className="link" href="#" target="_blank" rel="noreferrer" >
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="5" fill="white" />
                <path d="M14.018 7.13424V7.13208H14.5807L14.7863 7.17314C14.9234 7.1998 15.0478 7.23473 15.1596 7.27796C15.2714 7.32118 15.3796 7.37161 15.4842 7.42923C15.5888 7.48686 15.6837 7.54558 15.7688 7.60537C15.8532 7.66444 15.929 7.72711 15.996 7.79338C16.0624 7.86038 16.1659 7.87767 16.3066 7.84525C16.4473 7.81283 16.5987 7.76781 16.761 7.71018C16.9234 7.65255 17.0839 7.58772 17.2426 7.51568C17.4013 7.44364 17.4979 7.3979 17.5326 7.37845C17.5665 7.35828 17.5845 7.34748 17.5867 7.34603L17.5888 7.34279L17.5996 7.33739L17.6105 7.33198L17.6213 7.32658L17.6321 7.32118L17.6343 7.31794L17.6375 7.31578L17.6408 7.31361L17.6429 7.31037L17.6537 7.30713L17.6646 7.30497L17.6624 7.32118L17.6592 7.33739L17.6537 7.35359L17.6483 7.3698L17.6429 7.38061L17.6375 7.39141L17.6321 7.40762C17.6285 7.41843 17.6249 7.43283 17.6213 7.45085C17.6177 7.46886 17.5834 7.54089 17.5185 7.66696C17.4536 7.79303 17.3724 7.92089 17.275 8.05056C17.1776 8.18022 17.0904 8.27819 17.0132 8.34447C16.9353 8.41146 16.8837 8.45828 16.8584 8.48494C16.8332 8.51231 16.8025 8.53752 16.7665 8.56058L16.7124 8.59624L16.7015 8.60164L16.6907 8.60705L16.6886 8.61029L16.6853 8.61245L16.6821 8.61461L16.6799 8.61785L16.6691 8.62325L16.6583 8.62866L16.6561 8.6319L16.6528 8.63406L16.6496 8.63622L16.6474 8.63946L16.6453 8.6427L16.642 8.64486L16.6388 8.64703L16.6366 8.65027H16.6907L16.9937 8.58543C17.1957 8.54221 17.3886 8.48999 17.5726 8.42875L17.8647 8.3315L17.8972 8.3207L17.9134 8.31529L17.9243 8.30989L17.9351 8.30449L17.9459 8.29909L17.9567 8.29368L17.9784 8.29044L18 8.28828V8.30989L17.9946 8.31205L17.9892 8.31529L17.987 8.31854L17.9838 8.3207L17.9805 8.32286L17.9784 8.3261L17.9762 8.32934L17.9729 8.3315L17.9697 8.33366L17.9675 8.3369L17.9654 8.34015L17.9621 8.34231L17.9567 8.35311L17.9513 8.36392L17.9481 8.36608C17.9466 8.36824 17.9008 8.42947 17.8106 8.54978C17.7205 8.6708 17.6718 8.73202 17.6646 8.73347C17.6574 8.73563 17.6472 8.74644 17.6343 8.76589C17.622 8.78605 17.5455 8.86638 17.4049 9.00685C17.2642 9.14733 17.1264 9.2723 16.9915 9.38181C16.8559 9.49202 16.7874 9.62745 16.7859 9.7881C16.7838 9.94802 16.7755 10.1288 16.761 10.3305C16.7466 10.5322 16.7196 10.7502 16.6799 10.9843C16.6402 11.2184 16.5789 11.4831 16.4959 11.7785C16.413 12.0738 16.312 12.362 16.193 12.6429C16.0739 12.9239 15.9495 13.176 15.8197 13.3993C15.6898 13.6226 15.5708 13.8117 15.4626 13.9666C15.3544 14.1215 15.2444 14.2674 15.1326 14.4043C15.0207 14.5411 14.8794 14.6953 14.7084 14.8667C14.5367 15.0375 14.4429 15.1311 14.4271 15.1477C14.4105 15.1635 14.3398 15.2226 14.215 15.3249C14.0909 15.4279 13.9574 15.5309 13.8146 15.6339C13.6725 15.7362 13.5419 15.8216 13.4229 15.89C13.3039 15.9585 13.1603 16.0366 12.9922 16.1245C12.8249 16.2131 12.6438 16.2952 12.4491 16.3709C12.2543 16.4465 12.0487 16.5167 11.8323 16.5816C11.6159 16.6464 11.4067 16.6968 11.2047 16.7329C11.0027 16.7689 10.7737 16.7995 10.5176 16.8247L10.1335 16.8625V16.8679H9.43012V16.8625L9.33814 16.8571C9.27683 16.8535 9.22633 16.8499 9.18665 16.8463C9.14699 16.8427 8.99729 16.8229 8.7376 16.7869C8.47791 16.7509 8.27412 16.7148 8.12624 16.6788C7.97837 16.6428 7.75834 16.5744 7.46619 16.4735C7.17403 16.3727 6.92408 16.2707 6.71632 16.1677C6.50929 16.0654 6.37944 16.0006 6.32678 15.9732C6.27484 15.9466 6.21641 15.9134 6.15149 15.8738L6.0541 15.8144L6.05195 15.8111L6.04869 15.809L6.04545 15.8068L6.04328 15.8036L6.03246 15.7982L6.02164 15.7928L6.01949 15.7895L6.01623 15.7874L6.01298 15.7852L6.01082 15.782L6.00867 15.7787L6.00541 15.7766H6V15.755L6.01082 15.7571L6.02164 15.7604L6.07033 15.7658C6.1028 15.7694 6.19117 15.7748 6.33544 15.782C6.47972 15.7892 6.633 15.7892 6.79531 15.782C6.95762 15.7748 7.12354 15.7586 7.29306 15.7333C7.46258 15.7081 7.66276 15.6649 7.8936 15.6037C8.12444 15.5424 8.33653 15.4697 8.52986 15.3854C8.72246 15.3004 8.85952 15.237 8.94104 15.1952C9.02183 15.1542 9.14518 15.0778 9.31109 14.9661L9.55996 14.7987L9.56213 14.7954L9.56537 14.7933L9.56863 14.7911L9.57078 14.7879L9.57295 14.7846L9.57619 14.7824L9.57945 14.7803L9.58161 14.777L9.59243 14.7738L9.60325 14.7716L9.60541 14.7608L9.60866 14.75L9.61191 14.7479L9.61407 14.7446L9.5275 14.7392C9.4698 14.7356 9.41389 14.732 9.35978 14.7284C9.30568 14.7248 9.22092 14.7086 9.1055 14.6798C8.99009 14.651 8.86565 14.6078 8.73219 14.5501C8.59874 14.4925 8.46889 14.4241 8.34265 14.3448C8.21642 14.2656 8.12516 14.1997 8.06889 14.1471C8.01335 14.0952 7.94121 14.0217 7.85248 13.9266C7.76448 13.8308 7.68801 13.7325 7.62308 13.6317C7.55816 13.5308 7.49613 13.4144 7.43698 13.2826L7.34716 13.086L7.34175 13.0698L7.33634 13.0536L7.33309 13.0427L7.33093 13.0319L7.34716 13.0341L7.36339 13.0373L7.48242 13.0536C7.56177 13.0644 7.68621 13.068 7.85573 13.0644C8.02525 13.0608 8.14247 13.0536 8.20739 13.0427C8.27232 13.0319 8.312 13.0247 8.32642 13.0211L8.34806 13.0157L8.37511 13.0103L8.40216 13.0049L8.40433 13.0017L8.40757 12.9995L8.41083 12.9974L8.41298 12.9941L8.39134 12.9887L8.3697 12.9833L8.34806 12.9779L8.32642 12.9725L8.30478 12.9671C8.29036 12.9635 8.26511 12.9563 8.22904 12.9455C8.19297 12.9347 8.09559 12.8951 7.93688 12.8266C7.77819 12.7582 7.65194 12.6916 7.55816 12.6267C7.46415 12.5617 7.3745 12.4906 7.28981 12.4139C7.20541 12.3361 7.11272 12.2359 7.01172 12.1135C6.91073 11.991 6.82057 11.8487 6.74121 11.6866C6.66186 11.5246 6.60235 11.3697 6.56267 11.222C6.52315 11.0752 6.49708 10.9251 6.48477 10.7736L6.46528 10.5467L6.4761 10.5488L6.48693 10.5521L6.49775 10.5575L6.50857 10.5629L6.51939 10.5683L6.53021 10.5737L6.69793 10.6493C6.80975 10.6997 6.94861 10.743 7.11452 10.779C7.28044 10.815 7.37962 10.8348 7.41208 10.8384L7.46078 10.8438H7.55816L7.55601 10.8406L7.55275 10.8384L7.5495 10.8362L7.54734 10.833L7.54519 10.8298L7.54193 10.8276L7.53868 10.8254L7.53652 10.8222L7.5257 10.8168L7.51488 10.8114L7.51272 10.8081L7.50947 10.806L7.50622 10.8038L7.50406 10.8006L7.49324 10.7952L7.48242 10.7898L7.48026 10.7865C7.4781 10.7851 7.44708 10.762 7.3872 10.7174C7.32804 10.672 7.26601 10.6133 7.20108 10.5412C7.13616 10.4692 7.07124 10.3936 7.00631 10.3143C6.94127 10.2349 6.88334 10.1499 6.83318 10.0604C6.78269 9.97036 6.72931 9.85581 6.67304 9.71678C6.6175 9.57847 6.5753 9.43908 6.54644 9.2986C6.51759 9.15813 6.50136 9.01946 6.49775 8.88259C6.49414 8.74571 6.49775 8.62866 6.50857 8.53141C6.51939 8.43416 6.54103 8.32429 6.57349 8.20183C6.60595 8.07937 6.65285 7.94971 6.71416 7.81283L6.80613 7.60753L6.81154 7.59132L6.81695 7.57511L6.82021 7.57295L6.82236 7.56971L6.82453 7.56647L6.82777 7.5643L6.83103 7.56647L6.83318 7.56971L6.83535 7.57295L6.83859 7.57511L6.84185 7.57727L6.844 7.58051L6.84617 7.58375L6.84941 7.58592L6.85482 7.59672L6.86023 7.60753L6.86349 7.60969L6.86564 7.61293L7.01172 7.77501C7.10911 7.88307 7.22453 8.00374 7.35798 8.137C7.49144 8.27027 7.56538 8.33942 7.5798 8.34447C7.59424 8.35023 7.61226 8.36679 7.6339 8.39417C7.65555 8.42083 7.72769 8.48459 7.85032 8.58543C7.97296 8.68628 8.13346 8.80335 8.33183 8.93662C8.53021 9.06988 8.75023 9.20135 8.99188 9.33102C9.23355 9.46069 9.49324 9.57774 9.77096 9.6822C10.0487 9.78666 10.2435 9.85509 10.3553 9.88751C10.4671 9.91993 10.6583 9.96134 10.9288 10.0118C11.1993 10.0622 11.4031 10.0946 11.5401 10.109C11.6772 10.1234 11.771 10.1317 11.8215 10.1339L11.8972 10.136L11.8951 10.1198L11.8918 10.1036L11.8702 9.96855C11.8557 9.87851 11.8485 9.75244 11.8485 9.59035C11.8485 9.42827 11.8611 9.2788 11.8864 9.14192C11.9116 9.00505 11.9495 8.86638 12 8.72591C12.0505 8.58543 12.0999 8.47269 12.1482 8.38769C12.1973 8.30341 12.2615 8.20724 12.3408 8.09918C12.4202 7.99113 12.523 7.87947 12.6492 7.76421C12.7755 7.64894 12.9197 7.54629 13.0821 7.45625C13.2444 7.36621 13.3941 7.29776 13.5311 7.25094C13.6682 7.20412 13.7836 7.1735 13.8774 7.15909C13.9711 7.14469 14.018 7.1364 14.018 7.13424Z" fill="#8D8BA7" />
              </svg>
              <p>Twitter</p>
            </a>
            <a className="link" href="#" target="_blank" rel="noreferrer" >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="5" fill="white" />
                <path fillRule="evenodd" clipRule="evenodd" d="M6 12C6 9.60324 6 8.40486 6.57113 7.5417C6.82616 7.15626 7.15626 6.82616 7.5417 6.57113C8.40486 6 9.60324 6 12 6C14.3968 6 15.5951 6 16.4583 6.57113C16.8437 6.82616 17.1738 7.15626 17.4289 7.5417C18 8.40486 18 9.60324 18 12C18 14.3968 18 15.5951 17.4289 16.4583C17.1738 16.8437 16.8437 17.1738 16.4583 17.4289C15.5951 18 14.3968 18 12 18C9.60324 18 8.40486 18 7.5417 17.4289C7.15626 17.1738 6.82616 16.8437 6.57113 16.4583C6 15.5951 6 14.3968 6 12ZM15.1062 12.0002C15.1062 13.7157 13.7154 15.1064 11.9999 15.1064C10.2843 15.1064 8.89362 13.7157 8.89362 12.0002C8.89362 10.2846 10.2843 8.89388 11.9999 8.89388C13.7154 8.89388 15.1062 10.2846 15.1062 12.0002ZM11.9999 14.0555C13.135 14.0555 14.0552 13.1353 14.0552 12.0002C14.0552 10.865 13.135 9.94482 11.9999 9.94482C10.8648 9.94482 9.94456 10.865 9.94456 12.0002C9.94456 13.1353 10.8648 14.0555 11.9999 14.0555ZM15.2289 9.4677C15.632 9.4677 15.9587 9.14092 15.9587 8.73782C15.9587 8.33471 15.632 8.00793 15.2289 8.00793C14.8257 8.00793 14.499 8.33471 14.499 8.73782C14.499 9.14092 14.8257 9.4677 15.2289 9.4677Z" fill="#8D8BA7" />
              </svg>
              <p>إنستجرام</p>
            </a>
            <a className="link" href="#" target="_blank" rel="noreferrer" >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="-0.00195312" width="24" height="24" rx="5" fill="white" />
                <g clipPath="url(#clip0_51_759)">
                  <path d="M16.125 7.8562C15.0375 6.7687 13.5563 6.1687 12.0375 6.1687C8.85 6.1687 6.24375 8.7562 6.24375 11.9437C6.24375 12.975 6.50625 13.95 7.0125 14.85L6.1875 17.8312L9.28125 17.0437C10.125 17.4937 11.0812 17.7562 12.0562 17.7562C15.225 17.7375 17.8125 15.15 17.8125 11.9437C17.8125 10.4062 17.2125 8.96245 16.125 7.8562ZM12.0187 16.7625C11.175 16.7625 10.2937 16.5187 9.5625 16.0687L9.375 15.9562L7.55625 16.425L8.0625 14.6625L7.95 14.475C7.48125 13.7062 7.21875 12.8062 7.21875 11.9062C7.21875 9.26245 9.35625 7.12495 12.0187 7.12495C13.2937 7.12495 14.4937 7.6312 15.3937 8.5312C16.2937 9.4312 16.8 10.65 16.8 11.9437C16.8375 14.625 14.6625 16.7625 12.0187 16.7625ZM14.6625 13.1625C14.5125 13.0875 13.8187 12.7312 13.65 12.7125C13.5187 12.6562 13.4062 12.6375 13.3312 12.7875C13.2562 12.9375 12.9563 13.2375 12.8813 13.35C12.8063 13.425 12.7312 13.4625 12.5625 13.3687C12.4125 13.2937 11.9625 13.1625 11.4 12.6375C10.9688 12.2625 10.6688 11.7937 10.6125 11.625C10.5375 11.475 10.5938 11.4187 10.6875 11.325C10.7625 11.25 10.8375 11.175 10.8938 11.0625C10.9688 10.9875 10.9688 10.9125 11.0437 10.8187C11.1188 10.7437 11.0625 10.6312 11.025 10.5562C10.9688 10.4812 10.7062 9.7687 10.575 9.4687C10.4625 9.1687 10.3313 9.22495 10.2563 9.22495C10.1813 9.22495 10.0687 9.22495 9.99375 9.22495C9.91875 9.22495 9.73125 9.2437 9.61875 9.41245C9.4875 9.56245 9.1125 9.9187 9.1125 10.6312C9.1125 11.3437 9.61875 12 9.7125 12.1312C9.7875 12.2062 10.7438 13.6875 12.1688 14.325C12.5063 14.475 12.7687 14.5687 12.9937 14.6437C13.3312 14.7562 13.65 14.7187 13.8937 14.7C14.175 14.6812 14.7375 14.3625 14.8687 14.0062C14.9812 13.6875 14.9812 13.3687 14.9438 13.3125C14.9062 13.275 14.7937 13.2187 14.6625 13.1625Z" fill="#8D8BA7" />
                </g>
                <defs>
                  <clipPath id="clip0_51_759">
                    <rect width="12" height="12" fill="white" transform="translate(6 6)" />
                  </clipPath>
                </defs>
              </svg>
              <p>واتساب</p>
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>حقوق الطبع والنشر © 2022 كل الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer