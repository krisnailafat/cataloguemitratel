package com.mitratel;

 import android.widget.LinearLayout;
 import android.graphics.Color;
 import android.widget.TextView;
 import android.view.Gravity;
 import android.util.TypedValue;

import com.reactnativenavigation.controllers.SplashActivity;
import android.graphics.DrawFilter;
import android.graphics.Rect;
import android.graphics.RectF;
import android.graphics.Typeface;
import android.graphics.drawable.Drawable;
import android.media.Image;
import android.view.ViewGroup;
import android.widget.ImageView;


public class MainActivity extends SplashActivity {
    @Override
    public LinearLayout createSplashLayout(){
        LinearLayout view = new LinearLayout(this);
        TextView textView = new TextView(this);

        ImageView imageView = new ImageView(this);
        view.setOrientation(LinearLayout.VERTICAL);
        view.setLayoutParams(new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        view.setBackgroundColor(Color.parseColor("white"));
        view.setGravity(Gravity.CENTER_VERTICAL);

        imageView.setImageResource(R.mipmap.splash);
        view.addView(imageView);
        // view.setBackgroundColor(Color.parseColor("white"));
        // view.setGravity(Gravity.CENTER);

        // textView.setTextColor(Color.parseColor("red"));
        // textView.setText("MITRATEL");
        // textView.setGravity(Gravity.CENTER);
        // textView.setTextSize(TypedValue.COMPLEX_UNIT_DIP, 40);
        // view.addView(textView);

        return view;
    }

 }


// package com.mitratel;

// import com.facebook.react.ReactActivity;

// public class MainActivity extends ReactActivity {

//     /**
//      * Returns the name of the main component registered from JavaScript.
//      * This is used to schedule rendering of the component.
//      */
//     @Override
//     protected String getMainComponentName() {
//         return "mitratel";
//     }
// }
