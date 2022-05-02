import {createStore} from "vuex";
import user from "@/store/modules/user.js";
import event from "@/store/modules/event.js";

export default createStore({
    modules: {user, event},
});
