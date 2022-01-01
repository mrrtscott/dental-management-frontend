import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from '../common/patient';

@Pipe({
  name: 'patientsSearchFilter'
})
export class PatientsSearchFilterPipe implements PipeTransform {

  transform(patients: Patient[], searchValue: string): Patient[] {
    if(!patients || !searchValue){
      return patients;
    }
    return patients.filter(patients => patients.firstName .toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
