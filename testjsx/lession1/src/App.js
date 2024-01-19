import logo from './logo.svg';
import './App.css';
import Desgin from'react';





function App() {
 
  return (
    <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ĐỒ ẤN T3H</title>
    <link rel="stylesheet" href="./text.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    />
    <div id="container">
      <div id="nav">
        <div className="nav_one">
          <img
            src="https://weddingwonders.vn/wp-content/uploads/2021/06/cropped-LOGO-WEDDING-WONDERS-VIET-NAM-1.png"
            style={{ width: 129, height: 129 }}
          />
        </div>
        <div className="nav_tow">
          <div>
            <a href="#">TRANG CHỦ</a>
          </div>
          <div>
            <a href="#">GIỚI THIỆU</a>
          </div>
          <ul className="none_li">
            <li>
              <a href="#">DỊCH VỤ </a>
              <i className="fa-solid fa-caret-down" />
              <ul className="subnav">
                <li>
                  <a href="#">TRANG TRÍ TIỆC CƯỚI</a>
                </li>
                <li>
                  <a href="#">WEDDING PLANNING</a>
                </li>
                <li>
                  <a href="#">TỔ CHỨC SỰ KIỆN</a>
                </li>
              </ul>
            </li>
          </ul>
          <a href="#">DỰ ÁN THỰC TẾ</a>
          <a href="#">VIDEO CLIP</a>
          <a href="#">BLOG</a>
          <a href="#">LIÊN Hệ</a>
        </div>
      </div>
      <div id="silder">
        <div className="img">
          <img src="https://weddingwonders.vn/wp-content/uploads/2021/06/Trang-tri-gia-tien-Modern-Lotus-TRADITIONAL-CEREMONY-by-Wedding-Wonders-Viet-Nam-2.jpg" />
        </div>
        <div className="silder_btn">
          <h1 className="css_h1">WEDDING WONDERS VIỆT NAM</h1>
          <h1 className="css_h1btn">
            DESIGNING YOUR DREAM. CREATING OUR VISION.
          </h1>
          <p>
            Wedding Wonders Việt Nam là một trong những đơn vị chuyên nghiệp và có
            nhiều năm kinh nghiệm trong lĩnh vực lên kế hoạch, thiết kế, tổ chức
            và trang trí tiệc cưới, sự kiện tại Việt Nam. Chúng tôi cung cấp các
            dịch vụ toàn diện mang đến trải nghiệm hoàn hảo cho mọi khách hàng.
            Đến với Wedding Wonders Việt Nam, dù là tiệc cưới hay sự kiện cá nhân,
            sự kiện công ty đểu mang một dấu ấn rất riêng, nổi bật và thật sự có ý
            nghĩa.
          </p>
        </div>
        <div className="silder_btn1">
          <button>LIÊN HỆ NGAY</button>
        </div>
        <div className="silder_btn2">
          <div className="silder_text">
            <h1>DỊCH VỤ</h1>
            <h2>TIỆC CƯỚI &amp; SỰ KIỆN CAO CẤP</h2>
            <p>
              Wedding Wonders cung cấp các dịch vụ trang trí, lên kế hoạch, tổ
              chức tiệc cưới và sự kiện với phong cách hiện đại, sang trọng và
              chuyên nghiệp hàng đầu Việt Nam. Chúng tôi mang niềm đam mê, lòng
              nhiệt huyết và sự sáng tạo gửi vào các sản phẩm dịch vụ của mình để
              giúp ngày trọng đại của bạn trở nên thật đặc biệt, lộng lẫy và ghi
              lại dấu ấn khó quên.
            </p>
          </div>
          <div className="silder_img">
            <div>
              <img
                src="https://weddingwonders.vn/wp-content/uploads/2021/10/Dich-vu-len-ke-hoach-va-trang-tri-tiec-cuoi-cao-cap-Wedding-Wonders-Viet-Nam.jpg"
                style={{ width: 318, height: 318 }}
              />
            </div>
            <div className="divs_img">
              <div className="div_img_text">
                <a>Hòa &amp; Linh</a>
                <a>DECEMBER 5, 2020 LAN ANH GARDEN</a>
              </div>
              <div className="div_img_text1">
                <p>WEDDING WONDERS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="silder_btn3">
          <div className="silder_btn_css">
            <h2>TRANG TRÍ TIỆC CƯỚI</h2>
            <p>
              Với vị trí là một wedding planner nhiều năm kinh nghiệm, Wedding
              Wonders Việt Nam luôn sẵn sàng lắng nghe mong muốn của các cặp đôi
              để hiện thực hoá các ý tưởng về đám cưới, giúp ghi dấu ấn cá nhân và
              trở thành một lễ cưới thật sự có ý nghĩa.
            </p>
            <button>XEM CHI TIẾT</button>
          </div>
          <div className="silder_btn_css">
            <h2>WEDDING PLANNING</h2>
            <p>
              Chúng tôi hiểu rằng, những cặp đôi hiên đại thường bận rộn và ít có
              thời gian để lên kế hoạch, chăm chút cho ngày trọng đại của mình và
              cũng gặp nhiều khó khăn để tìm kiếm, quản lý các đơn vị cung cấp
              dịch vụ, địa điểm tổ chức tiệc cưới… Hãy để Wedding Wonders Việt Nam
              đồng hành cùng bạn để giải tỏa áp lực trên và tận hưởng ngày vui với
              các gói dịch vụ Wedding Planning đa dạng, chăm lo trọn vẹn.
            </p>
            <button>XEM CHI TIẾT</button>
          </div>
          <div className="silder_btn_css">
            <h2>TỔ CHỨC SỰ KIỆN</h2>
            <p>
              Nếu bạn có kế hoạch tổ chức sự kiện cho công ty, giới thiệu một sản
              phẩm, dịch vụ mới hoặc tổ chức một sự kiện thật đặc biệt cho riêng
              bạn, cho bạn bè, người thân? Wedding Wonders Việt Nam luôn sẵn sàng
              mang đến thành công cho những ý tưởng đó với dịch vụ tổ chức sự kiện
              chuyên nghiệp và tối ưu nhất.
            </p>
            <button>XEM CHI TIẾT</button>
          </div>
        </div>
      </div>
      <div id="content">
        <div className="content_text">
          <h1>TIỆC CƯỚI MỚI</h1>
          <h2>DỰ ÁN THỰC TẾ</h2>
          <p>
            Nếu bạn đang tìm kiếm một tiệc cưới với sự độc đáo, ý nghĩa và thật
            đáng nhớ. Hãy để Wedding Wonders truyền cảm hứng cho trí tưởng tượng
            của bạn với những ý tưởng và kinh nghiệm vững chắc của chúng tôi. Cùng
            theo dõi bộ sưu tập công việc đầy tinh tế từ Wedding Wonders Việt Nam.
          </p>
        </div>
      </div>
      {/* Thanh công cụ */}
      <div className="toolbar">
        <a className="toolbar-icon ico-i">
          <i className="fa-solid fa-arrow-down" />
        </a>
        <a className="toolbar-icon ico-i2">
          <i className="fa-brands fa-facebook-messenger" />
        </a>
        <a className="toolbar-icon ico-i3">
          <i className="fa-solid fa-phone" />
        </a>
      </div>
      {/* //Phần content ảnh của trang web */}
      <div className="content_img">
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/10/Tiec-cuoi-Huy-Ngoc-tai-Park-Hyatt-Hotel-duoc-len-ke-hoach-va-trang-tri-boi-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>Tiệc CƯới Trọng Huy &amp; Hồng Ngọc</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/06/Trang-tri-gia-tien-Phu-Thinh-Phuong-Thi-duoc-len-ke-hoach-va-trang-tri-boi-Wedding-Wonders-Viet-Nam-0.jpg"
            />
            <a> Lễ Gia Tiên|Thịnh Thi</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/04/Tiec-cuoi-Cao-Tri-Hoang-Anh-tai-Nikko-Hotel-duoc-len-ke-hoach-va-trang-tri-boi-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>TIệc CƯới Cao Trí &amp; Hoàng Anh</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/04/Tiec-cuoi-My-Thanh-tai-Rose-Villa-Sai-Gon-duoc-len-ke-hoach-va-trang-tri-boi-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>TIệc CƯới My &amp; Thanh</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/04/Tiec-cuoi-Thinh-Thi-tai-Lan-Anh-Garden-duoc-to-chuc-thuc-hien-boi-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>TIệc CƯớiThịnh &amp; Thi</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/04/Tiec-cuoi-Ngoc-Xuan-Anh-tai-Continental-Hotel-duoc-thuc-hien-boi-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>TIệc CƯới Bảo Ngọc &amp; Xuân Anh</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/04/Wedding-Khanh-Duy-Anh-tai-Landmark-81-decor-by-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>TIệc CƯới Khanh &amp; Duy Anh</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/04/Wedding-Jilee-Sofitel-by-Wedding-Wonders-Viet-Nam-.jpg"
            />
            <a>TIệc CƯới Ji park &amp; Justin Lee</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/04/Wedding-Linh-Hai-An-Lam-Retreat-by-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>TIệc CƯới Linh &amp; Hải</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2023/04/WEDDING-HANH-DUC-PARK-HYATT-By-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>TIệc CƯới Hạnh &amp; Hoàng Đức</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2022/09/Tiec-cuoi-Hanh-Dienel-gem-center-Decor-by-Wedding-Wonders-Viet-Nam-3.jpg"
            />
            <a>TIệc CƯới Hạnh &amp; Daniel</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2022/08/DH_06240.jpg"
            />
            <a>TIệc CƯới Tấn Đạt &amp; Thanh Thi</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2022/07/Tiec-cuoi-Linh-Vinh-Decor-by-wedding-wonders-viet-nam.jpg"
            />
            <a>TIệc CƯới Thùy Linh &amp; Quang Vinh</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2021/06/Gia-tien-Duc-Warren-Trang-tri-gia-tien-len-ke-hoach-to-chuc-tiec-cuoi-Wedding-Wonders-Viet-Nam-2.jpg"
            />
            <a>TIệc CƯới Hoàng Minh &amp; Phương Hoa</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2021/06/Trang-tri-gia-tien-Peach-pink-Wedding-Wonders-len-ke-hoach-trang-tri-tiec-cuoi-gia-tien-cao-cap-1.jpg"
            />
            <a>TIệc CƯới Quang Minh&amp; Hoài Tư</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2021/06/Trang-tri-gia-tien-Modern-Lotus-TRADITIONAL-CEREMONY-by-Wedding-Wonders-Viet-Nam-2.jpg"
            />
            <a>TIệc CƯới Quốc Đạt &amp; Hạnh Nguyễn</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2021/06/Tiec-cuoi-Duc-Warren-Tiec-cuoi-ngoai-troi-wedding-planner-decor-by-Wedding-Wonders-Viet-Nam-2.jpg"
            />
            <a>Gia Tiên Ngọc Đức &amp; Warren Goodie</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2021/06/Tiec-cuoi-Giau-Phong-Tiec-cuoi-ngoai-troi-wedding-planner-decor-trang-tri-tiec-cuoi-by-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>TIệc CƯới Cao Trí &amp; Hoàng Anh</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2021/06/Tiec-cuoi-Hoa-Linh-Tiec-cuoi-ngoai-troi-wedding-planner-decor-trang-tri-tiec-cuoi-by-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>Gia Tiên Peach pink</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2021/06/Tiec-cuoi-Anh-Hang-Chien-Hung-by-WEDDING-WONDERS-VIET-NAM-Trang-tri-tiec-cuoi-ngoai-troi.jpg"
            />
            <a>Gia Tiên Modern Lotus</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2021/06/Wedding-Diem-Ho-Thien-Nguyen-by-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>Tiệc Cước Ngọc Đức &amp; Warren Goodie</a>
          </div>
        </div>
        <div className="content_img_text">
          <div className="div_img">
            <img
              className="img_css"
              src="https://weddingwonders.vn/wp-content/uploads/2021/05/Wedding-Thu-Hien-Hoang-Vu-by-Wedding-Wonders-Viet-Nam.jpg"
            />
            <a>TIệc CƯới Ngọc Giàu &amp; Huy Phong</a>
          </div>
        </div>
      </div>
    </div>
    <div className="content_buttom">
      <div id="button_css">
        <button>XEM THÊM DỰ ÁN</button>
      </div>
    </div>
    <div className="content_btn1">
      <img
        className="btn1_img"
        src="https://th.bing.com/th/id/R.8fe10c2257779723cf1d89aa32839c6c?rik=tb1sBIvHkkulwg&riu=http%3a%2f%2fallisonmahphotography.com%2fwp-content%2fuploads%2f2014%2f11%2f101114_marietta_ga_wedding_maggiegreg_38.jpg&ehk=%2fIU8jdcNEBi2kMx5Npn%2fEahBNbjs2LcdLusQ5%2b0TlbE%3d&risl=&pid=ImgRaw&r=0"
      />
      <div className="btn1_img_text">
        <div>
          <h1>CẢM NHẬN TỪ CÁC CẶP ĐÔI HẠNH PHÚC</h1>
        </div>
        <div>
          <img src="https://weddingwonders.vn/wp-content/uploads/2021/06/Ngoc-Giau-Huy-Phong.png" />
        </div>
        <div>
          <p>
            "Team rất nhiệt tình và luôn sẵn sàng hỗ trợ cho bất kỳ mối quan hệ
            nào, Ngày cưới của chúng mình diễn ra rất thuận lợi và không phải đối
            phó với bất kỳ vấn đề nào"
          </p>
        </div>
        <div>
          <span>Giàu &amp; Phong</span>
          <span>January 9,2024</span>
        </div>
      </div>
    </div>
    <div className="content_btn2">
      <div className="content_btn2_text">
        <h1>Ý TƯỞNG VÀ LỜI KHUYÊN</h1>
        <h2>CẨM NANG CƯỚI</h2>
      </div>
      <div className="content_btn2_img">
        <div className="div_btn2">
          <img
            className="img_btn2_css"
            src="https://weddingwonders.vn/wp-content/uploads/2021/06/Momments-Tiec-cuoi-Duc-Warren-Tiec-cuoi-ngoai-troi-Wedding-outdoor-Wedding-Wonders-Viet-Nam-17.jpg"
          />
          <a>Cac Su Hướng Cưới Được Yêu Thích Nhất</a>
        </div>
        <div className="div_btn2">
          <img
            className="img_btn2_css"
            src="https://weddingwonders.vn/wp-content/uploads/2021/06/Su-kien-20.10-cong-ty-DKR-To-chuc-trang-tri-boi-Wedding-Wonders-Viet-Nam-2.jpg"
          />
          <a>10 Ý Tưởng Đám Cưới Hiện Đại</a>
        </div>
        <div className="div_btn2">
          <img
            className="img_btn2_css"
            src="https://weddingwonders.vn/wp-content/uploads/2021/06/Moments-Tiec-cuoi-Anh-Hang-Chien-Hung-by-WEDDING-WONDERS-VIET-NAM-Trang-tri-tiec-cuoi-ngoai-troi-Outdoor-wedding-30.jpg"
          />
          <a>9 Điều Cần Chuẩn Bị Cho Ngày Cưới</a>
        </div>
      </div>
    </div>
    <div className="btn2_button">
      <a className="a_button">
        <button>XEM THÊM BÀI VIẾT</button>
      </a>
    </div>
    <div className="img_btn2_text">
      <h2>ĐỊA ĐIỂM TỔ CHỨC</h2>
      <h1>ĐỐI TÁC</h1>
      <div className="img_btn2">
        <div>
          <img
            className="img_btn2_red"
            src="https://weddingwonders.vn/wp-content/uploads/elementor/thumbs/Brand-3-p92r62nsyio0cdrwu6p7ntbj5o5lva957q7gskp0hc.png"
          />
        </div>
        <div>
          <img
            className="img_btn2_red"
            src="https://weddingwonders.vn/wp-content/uploads/elementor/thumbs/Brand-22-p92s2w6xl9lfq83o6vf9815xv0dzmtjqq68t1e1580.png"
          />
        </div>
        <div>
          <img
            className="img_btn2_red"
            src="https://weddingwonders.vn/wp-content/uploads/elementor/thumbs/Brand-19-p92r66f5put5mtmg88bpxsddj7n2q2o2k8tepojfsg.png"
          />
        </div>
        <div>
          <img
            className="img_btn2_red"
            src="https://weddingwonders.vn/wp-content/uploads/elementor/thumbs/Brand-17-p92r66f5put5mtmg88bpxsddj7n2q2o2k8tepojfsg.png"
          />
        </div>
        <div>
          <img
            className="img_btn2_red"
            src="https://weddingwonders.vn/wp-content/uploads/elementor/thumbs/Brand-16-p92r65hbj0rvb7ntdpx3dalwxtrpidkc845x8ektyo.png"
          />
        </div>
      </div>
    </div>
    <div id="footer">
      <div className="footer_end col">
        <div className="footer_end_img">
          <img
            className="footer_end_img"
            src="https://weddingwonders.vn/wp-content/uploads/2020/12/logo-wedding-wonders-tagline.png"
          />
        </div>
        <div className="footer_end_p">
          <span>
            Tự hào dẫn đầu lĩnh vực tổ chức sự kiện và là nhà kiến tạo xu hướng
            tiệc cưới hàng đầu Việt Nam.
          </span>
        </div>
        <div className="footer_end_icon">
          <i className="fa-brands fa-facebook" />
          <i className="fa-brands fa-youtube" />
          <i className="fa-brands fa-instagram" />
          <i className="fa-brands fa-pinterest" />
        </div>
      </div>
      <div className="footer_contac col ">
        <h5>LIÊN HỆ</h5>
        <div>
          <a />
        </div>
        <div className="css_img">
          <ul>
            <li>
              <i className="fa-solid fa-house-chimney" />
              <span>57, Đường 19, P. An Khánh, TP Thủ Đức, TP HCM</span>
            </li>
            <li>
              <i className="fa-solid fa-phone" />
              <span>0909.601.301</span>
            </li>
            <li>
              <i className="fa-sharp fa-regular fa-envelope" />
              <span>info@weddingwonders.vn</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_service col ">
        <h5>DỊCH VỤ</h5>
        <div />
        <div className="css_img">
          <ul>
            <li>
              <i className="fa-solid fa-caret-right" />
              <span>Trang trí tiệc cưới</span>
            </li>
            <li>
              <i className="fa-solid fa-caret-right" />
              <span>Wedding planning</span>
            </li>
            <li>
              <i className="fa-solid fa-caret-right" />
              <span>Wedding planning</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_register col_css">
        <h5>ĐĂNG KÝ NHẬN ƯU ĐÃI</h5>
        <div />
        <div>
          <p>Nhận ngay phiếu giảm giá 5% cho lần đầu tiên sử dụng dịch vụ.</p>
        </div>
        <div>
          <input placeholder="Email" />
          <button>ĐĂNG KÝ</button>
        </div>
      </div>
    </div>
  </>
  
  );
}

export default App;
