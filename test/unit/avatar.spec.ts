import { getInitials } from "@/components/Avatar";
import { describe, it, expect  } from "vitest"

describe("getInitials()", () => {
    it("should convert full name to initials", () => {
        const initials = getInitials("Lucas Dunhão de Carvalho");
        
        expect(initials).toStrictEqual("LC");
    })

    it("should convert only first name to initial", () => {
        const initials = getInitials("Lucas");
        
        expect(initials).toStrictEqual("L");
    })

    it("should return empty string when name is empty", () => {
        const initials = getInitials("");
        
        expect(initials).toStrictEqual("");
    })

    it("should return initials when it has blank spaces", () => {
        const initials = getInitials("     Lucas     Dunhão   ");
        
        expect(initials).toStrictEqual("LD");
    })
})
