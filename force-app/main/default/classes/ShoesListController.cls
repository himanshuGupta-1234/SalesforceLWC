public with sharing class ShoesListController {
    @AuraEnabled
    public static List<Product__c> getShoes(){
        List<Product__c> shoesList = [SELECT Id,Name,Color__c,Size__c,Image__c,Price__c 
                                     FROM Product__c ];
        if(!shoesList.isEmpty()) {
            return shoesList;
        } else {
            return null;
        }
  }  
}
