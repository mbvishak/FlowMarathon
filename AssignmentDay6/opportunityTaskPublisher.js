import { LightningElement, api } from 'lwc';
import publishEvent from '@salesforce/apex/OpportunityActionPublisher.publishEvent';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class OpportunityTaskPublisher extends LightningElement {

    @api recordId; // Opportunity Id

    handleClick() {
        publishEvent({ opportunityId: this.recordId })
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Platform Event Published Successfully',
                        variant: 'success'
                    })
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error',
                        message: error.body.message,
                        variant: 'error'
                    })
                );
            });
    }
}