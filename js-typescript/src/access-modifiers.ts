//Access modifiers
class Vehicle {
  private currentSpeed: number = 0;

  constructor(
    public brand: string,
    public model: string,
    protected maximumSpeed: number = 220,
  ){}
  
  changeSpeed(speed: number) {
    const newSpeed = this.currentSpeed + speed;

    if (newSpeed >= 0 && newSpeed <= this.maximumSpeed) {
      this.currentSpeed = newSpeed;
    } else {
      this.currentSpeed = speed > 0 ? this.maximumSpeed : 0
    }
  }

  speedUp(value: number) {
    this.changeSpeed(value);
    console.log(this.currentSpeed);
  }

  speedDown(value: number) {
    this.changeSpeed(value);
    console.log(this.currentSpeed);
  }
}

const carro = new Vehicle('Chevrolet', 'Prisma', 250)

//Herança

class Camaro  extends Vehicle {
  constructor() {
    super('Chevrolet', 'Camaro', 300)
  }

  turbo(){
   this.changeSpeed(this.maximumSpeed); 
  }
}

const camaro = new Camaro();
camaro.speedUp(5);
camaro.turbo();
camaro.speedDown(0);
