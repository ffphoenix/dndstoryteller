import {useAPIPost} from "../../../utils/useAPI";
import {autorun} from "mobx";
import UI from "../../UI";

export default (credentialResponse) => {
    const state = useAPIPost('auth/google/login', {credentialResponse});
    autorun(() => {
        if (!state.isLoading && !state.isError) {
            console.log('Init user here');
        }
        UI.globalLoading = state.isLoading;
    });

}