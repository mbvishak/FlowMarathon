public with sharing class OpportunityActionPublisher {

    @AuraEnabled
    public static void publishEvent(Id opportunityId) {

        Opportunity_Action__e eventMsg = new Opportunity_Action__e(
            Opportunity_Id__c = opportunityId,
            Timestamp__c = System.now(),
            Action_Type__c = 'Create Task'
        );

        Database.SaveResult sr = EventBus.publish(eventMsg);

        if(!sr.isSuccess()) {
            throw new AuraHandledException('Error publishing event');
        }
    }
}
