export class Remiseria {

  vehiculos = []
  viajes = []
  minimoDeViaje = 30

  agregarFlota(vehiculo) {
    this.vehiculos.push(vehiculo)
  }

  quitarDeFlota(vehiculo) {
    var i = this.vehiculos.indexOf(vehiculo)
    this.vehiculos.splice(i, vehiculo)
  }
  
  sumarizar(numeros) {
    return numeros.reduce((n1, n2) => n1 + n2, 0)
  }
  cantVehiculos(){
    return this.vehiculos.length
  }
}