import { User } from "@/app/types/adminTypes/user.types";
import UserCard from "./UserCard";

interface Props {
    users: User[];
}

export default function UserList({
    users,
}: Props) {
    return (
        <>
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    user={user}
                />
            ))}
        </>
    );
}