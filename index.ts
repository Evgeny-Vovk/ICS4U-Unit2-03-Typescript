/**
 * This is the standard index.ts starting point.
 *
 * author  Evgeny Vovk
 * version 1.0
 * since   2024-04-02
 */
import { EvgenyStack } from './EvgenyStack'

let fruits = new EvgenyStack()
console.log(fruits.isEmpty)
console.log("Size of the stack is: " + fruits.size)
fruits.push("apple")
fruits.push("banana")
fruits.push("cherry")
console.log("fruits: " + fruits.showStack)
console.log("popped: " + fruits.popItem())
console.log("fruits: " + fruits.showStack)
console.log(fruits.isEmpty)
console.log("Size of the stack is: " + fruits.size)
console.log("")

let colours = new EvgenyStack()
console.log(colours.isEmpty)
console.log("Size of the stack is: " + colours.size)
colours.push("red")
colours.push("green")
colours.push("blue")
console.log("colours: " + colours.showStack)
console.log("popped: " + colours.popItem())
console.log("popped: " + colours.popItem())
console.log("colours: " + colours.showStack)
console.log(colours.isEmpty)
console.log("Size of the stack is: " + colours.size)
console.log("")

let feelings = new EvgenyStack()
console.log(feelings.isEmpty)
console.log("Size of the stack is: " + feelings.size)
feelings.push("happy")
feelings.push("sad")
feelings.push("mad")
console.log("feelings: " + feelings.showStack)
console.log("popped: " + feelings.popItem())
console.log("popped: " + feelings.popItem())
console.log("popped: " + feelings.popItem())
console.log("popped: " + feelings.popItem())
console.log("feelings: " + feelings.showStack)
console.log(feelings.isEmpty)
console.log("Size of the stack is: " + feelings.size)
console.log("")

console.log("\nDone.")

