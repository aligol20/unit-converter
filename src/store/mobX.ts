import {
  makeObservable,
  observable,
  action,
  computed,
  makeAutoObservable,
} from 'mobx';

class Converter {
  mass = '';
  length = '';
  isMetric = false;
  inch = '';

  constructor() {
    makeObservable(this, {
      mass: observable,
      length: observable,
      isMetric: observable,
      inch: observable,
      setIsMetric: action,
      setMass: action,
      setLength: action,
      setInch: action,
      onConvertToMetric: action,
      onConvertToImperial: action,
    });
  }

  setIsMetric(value: boolean) {
    this.isMetric = value;
  }
  setMass(value: string) {
    this.mass = value;
  }
  setLength(value: string) {
    this.length = value;
  }
  setInch(value: string) {
    this.inch = value;
  }
  onConvertToMetric() {
    this.setIsMetric(true);
    this.setMass((+this.mass / 2.2).toString());
    let tempMeter = ((+this.inch + +this.length * 12) / 39.3701).toFixed(2);
    this.setLength(tempMeter);
  }
  onConvertToImperial() {
    this.setIsMetric(false);
    this.setMass((+this.mass * 2.2).toString());
    let tempFoot = ((+this.length * 39.3701) / 12).toFixed(0);
    let tempInch = ((+this.length * 39.3701) % 12).toFixed(2);
    this.setLength(tempFoot);
    this.setInch(tempInch);
  }
}
export default Converter;
