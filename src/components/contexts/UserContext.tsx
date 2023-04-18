import { createContext } from "react";
import { UserContextType } from "../types/types.js";

const userContext = createContext<UserContextType | null>(null);

export default userContext;