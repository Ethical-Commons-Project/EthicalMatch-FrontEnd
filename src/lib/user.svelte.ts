import LoginModal from "$component/LoginModal.svelte";
import { modals } from "svelte-modals";

export type UserDTO = {
    // TEMP placeholder user model
    id: number;
    name: string;

    avatarUri?: string;

    email?: string;
    password: string;
}

type AccountStore = { value: UserDTO | null }
const userAccount = $state<AccountStore>({ value: null });

export function getUser(promptIfNotLoggedIn = true): AccountStore {
    let user = $derived(userAccount);

    const storedUser = localStorage.getItem('user');
    if (storedUser) user.value = JSON.parse(storedUser);

    $effect(() => {
        if (user.value)
            localStorage.setItem('user', JSON.stringify(user.value));
        else localStorage.removeItem('user');
    });

    if (!user.value && promptIfNotLoggedIn) {
        promptLogin();
    }

    return user;
}

export function promptLogin() {
    if (userAccount.value) return;

    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        userAccount.value = JSON.parse(storedUser);
        return;
    }

    modals.open(LoginModal, { setUser: (value: UserDTO) => userAccount.value = value });
}