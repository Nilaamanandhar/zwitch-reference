import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { Arrow } from "../assets/svg/Logo/Icons";
import background from "../assets/background_img/background.jpg";
import { navbarSlice } from "../redux/navbar/navbar.slice";
import PopUpModal from "../component/modal/modal";
import TopNavbar from "../component/Navbar/navbar";
type MainPageType = {
  handleFullScreen: any;
};
export const MainPage = (props: MainPageType) => {
  const dispatch = useAppDispatch();
  const popout = useAppSelector((state: any) => state.navbar.openDropDown);
  let navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div>
      <img className="background-img" src={background} />
      <TopNavbar
        user={"chris Grafi"}
        showPopOut={() => dispatch(navbarSlice.actions.openPopOut())}
        leftContent={"Jaargroep"}
        handleFullScreen={() => props.handleFullScreen()}
      />
{popout && (
            <div
              className="setting-overlay"
              onClick={() => {
                dispatch(navbarSlice.actions.openPopOut());
              }}
            ></div>
          )}
      <div className="container">
        
        <div className="start-content">
          
          <h1 className="center-content">Welkom, Chris!</h1>
          <div className="welcomehome-icon">
            <div
              onClick={() => {
                navigate("/level");
              }}
              className="arrow-icon"
            >
              <Arrow />
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <PopUpModal
          size="lg"
          dialogClassName=""
          show={openDialog}
          close={() => setOpenDialog(false)}
          centered={true}
          title={""}
        >
          <div className="test1">
            <h4>Popup</h4>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

<h4 className="mt-3">Why do we use it</h4>
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


<h4 className="mt-3">Where does it come from</h4>
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          
<h4 className="mt-3">Where can I get some?</h4>
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
Vivamus egestas consequat magna, in ultrices odio pharetra a. Sed eget lectus et neque iaculis efficitur. Sed ut lacus a lacus porttitor lobortis. Mauris a erat risus. Proin porta velit id odio interdum vulputate in sit amet ligula. Morbi maximus felis id tempor pellentesque. Nunc mattis aliquet ipsum vitae rutrum. Ut iaculis erat et leo vestibulum, nec ultricies turpis luctus. Mauris nec purus ut elit imperdiet mattis. Cras id aliquam dui. Maecenas sapien neque, commodo ac massa pharetra, ultrices elementum velit. Nam fringilla convallis libero. Proin sodales sollicitudin mi vitae vestibulum. Ut non lacus tempus, accumsan nunc et, tincidunt lorem. Proin lacus sem, ultricies vestibulum ipsum ut, ornare vestibulum diam. Vestibulum et ipsum at ante ullamcorper semper.

In commodo eu orci in vulputate. Integer gravida egestas feugiat. Sed sed justo consequat, sodales justo vel, sagittis turpis. Aenean sodales vulputate leo eget viverra. Suspendisse vel lectus est. Quisque a sollicitudin metus. Aliquam mattis mauris sed tincidunt iaculis. Nulla sit amet tristique nulla. Phasellus tincidunt finibus libero, eget venenatis justo faucibus non. In sit amet risus eget enim rutrum dapibus nec quis lectus. Vestibulum felis nunc, pulvinar in ultricies in, porta at eros. Nam consequat consectetur facilisis. Nulla facilisi. Nulla dapibus elementum neque viverra maximus.

Duis consequat urna sit amet est porta, id consectetur odio auctor. Integer ut auctor justo. Vestibulum at arcu a quam bibendum tempor. Aliquam quis ipsum lacinia, tempor tortor in, tristique ante. Aliquam massa turpis, tincidunt sit amet elementum sed, laoreet non ipsum. Vivamus pellentesque felis lectus, ac scelerisque nunc finibus nec. Vestibulum fermentum facilisis elementum. Vestibulum quis nisl tincidunt felis ullamcorper efficitur sed quis lacus. Donec et aliquet augue. Nunc bibendum ligula sed metus dignissim, cursus vehicula tellus elementum. Morbi mattis, elit vel eleifend sagittis, magna lacus porta leo, quis semper lacus libero ut lectus. Vivamus mattis lacus nulla, dignissim sodales felis venenatis sed. Sed porta sapien odio, non condimentum justo ornare sed.

In hac habitasse platea dictumst. Vestibulum at risus ut neque vulputate sagittis. Pellentesque pellentesque ante ac accumsan blandit. Aliquam ullamcorper id est et condimentum. Sed id libero a tortor iaculis faucibus. In blandit sollicitudin sem sed porta. Suspendisse sollicitudin, leo eget pretium tincidunt, dolor magna viverra lectus, gravida malesuada diam mi hendrerit eros. Duis libero risus, faucibus a urna eu, varius semper dolor. In sagittis odio augue, sed varius velit ultricies in. Nunc elementum turpis non tellus varius, sed rhoncus ipsum viverra. Nunc pulvinar non lorem in tempor. Donec nec sagittis neque, sit amet pellentesque ex. In cursus ipsum a tempor sodales. Nullam lacus arcu, mollis sed est sed, mattis pulvinar dui. Sed consectetur libero at facilisis convallis.

Etiam accumsan erat et nibh dapibus, fermentum dictum eros tristique. Cras tincidunt nisl eu maximus condimentum. In ex lacus, pharetra quis blandit dictum, fermentum et eros. Quisque semper fringilla malesuada. Proin hendrerit lobortis vehicula. Vivamus consectetur orci sed varius convallis. Pellentesque in mi turpis. Mauris pharetra laoreet felis. Mauris et imperdiet dolor, vel dignissim tortor. Vivamus interdum, orci vitae auctor vulputate, mi nunc tempor ipsum, in imperdiet arcu ligula vitae magna. Vestibulum nulla ex, lobortis a varius vitae, facilisis sed turpis. Integer vel mi vitae eros vehicula dignissim. Cras gravida est vitae sagittis tempus. Morbi pretium ultricies consectetur      
In blandit feugiat felis, et molestie enim tempor vel. Curabitur commodo nisl id pharetra viverra. Suspendisse potenti. Nunc a suscipit turpis. Quisque id massa at nunc porttitor lacinia a iaculis ex. Etiam condimentum in erat et vestibulum. In mattis lorem nec quam aliquet, eu pharetra sem rutrum. Aenean convallis eros ante, ut consequat turpis vulputate in. Pellentesque eget tortor laoreet, efficitur justo vitae, pretium lacus. Nullam in lacinia magna. Nam vehicula, lorem id sagittis hendrerit, purus purus sollicitudin neque, quis vehicula neque diam vitae massa. Phasellus eu purus viverra, tincidunt felis eget, viverra massa. Aenean et posuere nulla, sit amet fermentum velit. Donec rhoncus velit enim, a placerat purus iaculis a. Mauris a mi ut arcu semper pulvinar at vel mi. Praesent vel felis et eros eleifend lobortis non at leo.</div>
        </PopUpModal>

        <a
          href="#"
          type="button"
          className="footer-text"
          onClick={() => {
            setOpenDialog(true);
          }}
        >
          Disclaimer
        </a>
        <img src="images/footerLogo.svg" className="footer-logo" />
      </div>
    </div>
  );
};
