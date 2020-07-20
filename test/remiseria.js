import { expect } from "chai"
import { describe, beforeEach } from "mocha"
import { Remiseria } from "../src/remiseria"
import { ChevroletCorsa } from "../src/autos"

describe("Remiseria ", function () {

    var remiseria
    var popular
    var trafic
    var autoStandard
    var chevrolet
    var pulenta
    var autoDistinto

    beforeEach(() => {

        remiseria = new Remiseria()
        chevrolet = new ChevroletCorsa("rojo")
        
    })

    it("agregar vehiculo", () => {
        remiseria.agregarFlota(trafic)
        expect(remiseria.cantVehiculos()).to.equal(1)

    })

})