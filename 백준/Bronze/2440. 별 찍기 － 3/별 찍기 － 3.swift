import Foundation

let num = Int(readLine()!)!

for i in (1...num).reversed() {
    for _ in 0..<i {
        print("*", terminator: "")
    }
    print("")
}