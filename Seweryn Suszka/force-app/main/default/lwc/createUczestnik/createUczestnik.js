import { LightningElement, api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class createUczestnik extends LightningElement {
    @api recordId;
    handleSubmit(event) {
        console.log('onsubmit event recordEditForm'+ event.detail.fields);
    }

    handleSuccess(event) {
        console.log('onsuccess event recordEditForm', event.detail.id);
        const e = new ShowToastEvent({
            title: 'Sukces!',
            message: 'Uczestnik został utworzony',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(e);        
        this.handleReset(event);

    }

    handleReset(event) {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
     }
}