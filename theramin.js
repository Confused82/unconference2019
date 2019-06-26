let change = 0
let backforwards = 0
let sidetoside = 0
let updown = 0
while (true) {
    updown = input.acceleration(Dimension.Y) / 20
    sidetoside = input.acceleration(Dimension.X) / 20
    backforwards = input.acceleration(Dimension.Z) / 20
    change = sidetoside + (updown + backforwards)
    music.ringTone(change + 440)
}
