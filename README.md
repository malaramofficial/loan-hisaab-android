# लोन हिसाब — Android APK

यह Android ऐप मौजूदा क्लाउड ऐप को Capacitor WebView में खोलता है:

https://app-cudzoy.v2.appdeploy.ai/

## APK बनाना

1. GitHub repository में **Actions** खोलें।
2. **Build Loan Hisaab APK** चुनें।
3. **Run workflow** दबाएँ।
4. रन पूरा होने पर **Artifacts** में `loan-hisaab-debug-apk` डाउनलोड करें।
5. ZIP खोलकर `app-debug.apk` इंस्टॉल करें।

यह debug APK है और सीधे Android फोन पर इंस्टॉल किया जा सकता है। इंस्टॉल करते समय Android अनुमति माँग सकता है।

## जरूरी जानकारी

- ऐप का डेटा AppDeploy cloud database में ही रहता है।
- लॉगिन और डेटा सिंक के लिए इंटरनेट जरूरी है।
- यह APK मौजूदा वेब ऐप का Android WebView wrapper है; क्लाउड बैकएंड अलग से चलता रहेगा।
- यह debug-signed APK है, Play Store release के लिए नहीं।
