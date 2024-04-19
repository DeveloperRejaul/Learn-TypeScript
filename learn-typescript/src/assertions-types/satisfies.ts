/**
 * @description The new satisfies operator lets us validate that the type of an expression matches some type,
 * without changing the resulting type of that expression. As an example, we could use satisfies to validate 
 * that all the properties of palette are compatible with string | number[]:
 */

type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];
const palette = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [0, 0, 255]
//  ~~~~ The typo is now caught!
} satisfies Record<Colors, string | RGB>;