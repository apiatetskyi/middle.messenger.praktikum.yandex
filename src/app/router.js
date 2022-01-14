import { MainPage, MainPageModel } from "../pages/main";
import { SigninPage, SigninPageModel } from "../pages/sign-in";
import { SignupPage, SignupPageModel } from "../pages/sign-up";
import { NotFoundPage, NotFoundPageModel } from "../pages/404";
import { ServerErrorPage, ServerErrorPageModel } from "../pages/500";
import { ChatPage, ChatPageModel } from "../pages/chat";
import { ProfilePage, ProfilePageModel } from "../pages/profile";
import { getCompiledTemplate, renderHtml } from "../shared/lib/render";

const ROUTE_404 = "404";
const ROUTE_500 = "500";
const ROUTE_CHAT = "/chat";
const ROUTE_INDEX = "/";
const ROUTE_PROFILE = "/profile";
const ROUTE_SIGN_IN = "/sing-in";
const ROUTE_SIGN_UP = "/sign-up";

const mainPageLinks = [
  { link: ROUTE_CHAT, title: ChatPageModel.PAGE_TITLE },
  { link: ROUTE_INDEX, title: MainPageModel.PAGE_TITLE },
  { link: ROUTE_PROFILE, title: ProfilePageModel.PAGE_TITLE },
  { link: ROUTE_SIGN_IN, title: SigninPageModel.PAGE_TITLE },
  { link: ROUTE_SIGN_UP, title: SignupPageModel.PAGE_TITLE },
  { link: ROUTE_404, title: NotFoundPageModel.PAGE_TITLE },
  { link: ROUTE_500, title: ServerErrorPageModel.PAGE_TITLE },
];

const root = document.querySelector("#root");

export const router = {
  [ROUTE_INDEX]: {
    template: getCompiledTemplate(MainPage.template, { links: mainPageLinks }),
    title: MainPageModel.PAGE_TITLE,
  },

  [ROUTE_CHAT]: {
    template: getCompiledTemplate(ChatPage.template, {}),
    title: ChatPageModel.PAGE_TITLE,
  },

  [ROUTE_PROFILE]: {
    template: getCompiledTemplate(ProfilePage.template, {}),
    title: ProfilePageModel.PAGE_TITLE,
  },

  [ROUTE_SIGN_IN]: {
    template: getCompiledTemplate(SigninPage.template, {}),
    title: SigninPageModel.PAGE_TITLE,
  },

  [ROUTE_SIGN_UP]: {
    template: getCompiledTemplate(SignupPage.template, {}),
    title: SignupPageModel.PAGE_TITLE,
  },

  [ROUTE_500]: {
    template: getCompiledTemplate(ServerErrorPage.template, {}),
    title: ServerErrorPageModel.PAGE_TITLE,
  },

  [ROUTE_404]: {
    template: getCompiledTemplate(NotFoundPage.template, {}),
    title: NotFoundPageModel.PAGE_TITLE,
  },
};

export const getRoute = (pathname) => {
  const route = router[pathname] || router[ROUTE_404];
  document.title = route.title;
  renderHtml(root, route.template);
};
