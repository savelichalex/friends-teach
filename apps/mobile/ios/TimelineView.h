//
//  TimelineView.h
//  Timeline
//
//  Created by Admin on 30.09.16.
//  Copyright © 2016 savelichalex. All rights reserved.
//

#ifndef TimelineView_h
#define TimelineView_h

#import <UIKit/UIKit.h>

@interface TimelineView : UIView {
    float offsetBetweenLines;
    CGFloat activeLine;
    int activeLineInt;
    int n;
    float nRatio;
}

@property (nonatomic) float tPosition;
@property (nonatomic) int countWordsOnScreen;
@property (nonatomic) NSArray *timestamps;

@property (nonatomic) float minAlpha;
@property (nonatomic) float minWidthRatio;
@property (nonatomic) UIColor *lineColor;
@property (nonatomic) int linesCount;

@end

#endif /* TimelineView_h */
