import { writable, } from "svelte/store";
import { modals } from "svelte-modals";
import LoginModal from "$component/LoginModal.svelte";

export type UserDTO = {
    // TEMP placeholder user model
    id: number;
    name: string;

    avatarUri?: string;

    email?: string;
    password: string;
}


let userData: UserDTO | null;
const user = writable<UserDTO | null>()
user.subscribe(x => {
    userData = x;
    if (x)
        localStorage.setItem('user', JSON.stringify(x));
    else
        localStorage.removeItem('user');
    return x;
});

async function getUser(): Promise<UserDTO> {
    return new Promise(async (resolve, reject) => {
        if (userData) resolve(userData);
        const storedUserString: any = localStorage.getItem('user');

        if (storedUserString) {
            const storedUser = JSON.parse(storedUserString) as UserDTO;
            // TODO validate fetched user data
            storedUser.id++;
            user.set(storedUser);
        } else {
            await promptUserLogin();
        }

        if (userData)
            resolve(userData);
        else reject("Failed to login user");
    });
}

async function promptUserLogin(): Promise<UserDTO> {
    await modals.open(LoginModal, { userStore: user }); // This either resolves after setting the user, or doesn't resolve at all
    return Promise.resolve(userData!);
}