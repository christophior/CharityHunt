/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"rczujOxd6QoRDX8ux7xPHE5aidbttw58"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"wGmve4jkigvSsYAjFeaJvtfqg5uvJuR9"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"TygQtxaC6FqGI1Njol4w4woxjZYAfMMh"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"9Z0GT7UzYSfBkbPkhumdLaOc5xa7JPLU"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"Awi0cgmBn58nbx90c6COvPwL3TTPYype"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"LHEIphqxJYR85yTUaSacRmUd7nYToe5W"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
