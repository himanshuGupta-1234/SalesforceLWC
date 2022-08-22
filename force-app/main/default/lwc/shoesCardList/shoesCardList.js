import { LightningElement ,api} from 'lwc';
import getShoes from'@salesforce/apex/ShoesListController.getShoes';

export default class ShoesCardList extends LightningElement {

    shoes;
    error;
    @api recordId;

    connectedCallback(){
        
        getShoes()
        .then(result=>{
            this.shoes = result;
        })
        .catch(error=>{
            this.error = error;
        })

    }


}