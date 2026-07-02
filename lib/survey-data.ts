import type { Survey } from "./types";

/**
 * Canonical survey content (Phase 1 prototype).
 *
 * In production these questions live in the Supabase `questions` /
 * `question_options` tables (see supabase/migrations/0001_init.sql) so they
 * can be edited, versioned and reviewed without code changes. For the local
 * prototype they are defined here as the single source of truth and served
 * by /api/survey.
 *
 * NOTE: All Arabic wording is indicative and MUST be reviewed by a native
 * Arabic speaker and approved by the ethics/research team before any real use.
 */
export const SURVEY: Survey = {
  version: "v1-2026-06",
  themes: [
    { id: "demographics", title: { en: "About you", ar: "معلومات عنك" } },
    { id: "accessibility", title: { en: "Accessibility", ar: "سهولة الوصول" } },
    { id: "trust", title: { en: "Trust & willingness", ar: "الثقة والاستعداد" } },
    { id: "relevance", title: { en: "Relevance", ar: "الفائدة" } },
    { id: "challenges", title: { en: "Challenges", ar: "التحديات" } },
    { id: "impact", title: { en: "Impact & feedback", ar: "الأثر والنتيجة" } },
  ],
  questions: [
    // ── Demographics ──
    {
      id: "age_band",
      theme: "demographics",
      type: "single",
      prompt: { en: "Which age group are you in?", ar: "ما هي فئتك العمرية؟" },
      options: [
        { value: "u18", label: { en: "Under 18", ar: "أقل من 18" } },
        { value: "18_24", label: { en: "18–24", ar: "18–24" } },
        { value: "25_34", label: { en: "25–34", ar: "25–34" } },
        { value: "35_44", label: { en: "35–44", ar: "35–44" } },
        { value: "45_59", label: { en: "45–59", ar: "45–59" } },
        { value: "60p", label: { en: "60 or older", ar: "60 أو أكثر" } },
        { value: "na", label: { en: "Prefer not to say", ar: "أفضّل عدم الإجابة" } },
      ],
    },
    {
      id: "gender",
      theme: "demographics",
      type: "single",
      prompt: { en: "How do you describe your gender?", ar: "كيف تصف نوعك الاجتماعي؟" },
      options: [
        { value: "female", label: { en: "Female", ar: "أنثى" } },
        { value: "male", label: { en: "Male", ar: "ذكر" } },
        { value: "other", label: { en: "Other", ar: "آخر" } },
        { value: "na", label: { en: "Prefer not to say", ar: "أفضّل عدم الإجابة" } },
      ],
    },
    {
      id: "area",
      theme: "demographics",
      type: "single",
      prompt: { en: "Which area do you live in?", ar: "في أي منطقة تعيش؟" },
      options: [
        { value: "amman", label: { en: "Amman", ar: "عمّان" } },
        { value: "irbid", label: { en: "Irbid", ar: "إربد" } },
        { value: "mafraq", label: { en: "Mafraq", ar: "المفرق" } },
        { value: "zarqa", label: { en: "Zarqa", ar: "الزرقاء" } },
        { value: "camp", label: { en: "A refugee camp", ar: "مخيم لاجئين" } },
        { value: "other", label: { en: "Other", ar: "أخرى" } },
        { value: "na", label: { en: "Prefer not to say", ar: "أفضّل عدم الإجابة" } },
      ],
    },

    // ── Theme 1: Accessibility ──
    {
      id: "acc_tools",
      theme: "accessibility",
      type: "multiple",
      prompt: {
        en: "Which digital tools do you use to get water information or report water problems? (Choose any.)",
        ar: "ما الأدوات الرقمية التي تستخدمها للحصول على معلومات المياه أو للإبلاغ عن مشاكل المياه؟ (اختر ما ينطبق.)",
      },
      options: [
        { value: "app", label: { en: "A mobile app", ar: "تطبيق على الهاتف" } },
        { value: "whatsapp", label: { en: "WhatsApp", ar: "واتساب" } },
        { value: "sms", label: { en: "SMS / text message", ar: "رسالة نصية SMS" } },
        { value: "website", label: { en: "A website", ar: "موقع إلكتروني" } },
        { value: "call", label: { en: "Phone call", ar: "مكالمة هاتفية" } },
        { value: "none", label: { en: "I don't use any", ar: "لا أستخدم أيًا منها" } },
        { value: "other", label: { en: "Other", ar: "أخرى" } },
      ],
    },
    {
      id: "acc_ease",
      theme: "accessibility",
      type: "scale",
      prompt: {
        en: "How easy is it for you to access these digital water tools?",
        ar: "ما مدى سهولة وصولك إلى هذه الأدوات الرقمية للمياه؟",
      },
      scaleLabels: { low: { en: "Very hard", ar: "صعب جدًا" }, high: { en: "Very easy", ar: "سهل جدًا" } },
    },
    {
      id: "acc_comment",
      theme: "accessibility",
      type: "multiple",
      required: false,
      prompt: {
        en: "Anything you want to add about getting access to these tools? (Optional)",
        ar: "هل تريد إضافة أي شيء عن الوصول إلى هذه الأدوات؟ (اختياري)",
      },
      options: [
        { value: "slow_crash", label: { en: "The tools load slowly or crash", ar: "الأدوات تتحمل ببطء أو تتعطل" } },
        { value: "no_reply", label: { en: "I don't get replies to my reports", ar: "لا أتلقى ردوداً على بلاغاتي" } },
        { value: "not_smartphone", label: { en: "I don't own a smartphone", ar: "لا أملك هاتفاً ذكياً" } },
        { value: "confusing_layout", label: { en: "The layout or website is confusing", ar: "تصميم الموقع أو التطبيق محير" } },
        { value: "none", label: { en: "No additional comments", ar: "لا توجد ملاحظات إضافية" } },
      ],
    },

    // ── Theme 2: Trust & willingness ──
    {
      id: "trust_comfort",
      theme: "trust",
      type: "scale",
      prompt: {
        en: "How comfortable are you sharing information about water issues digitally?",
        ar: "ما مدى ارتياحك لمشاركة معلومات عن مشاكل المياه بشكل رقمي؟",
      },
      scaleLabels: { low: { en: "Not at all", ar: "غير مرتاح إطلاقًا" }, high: { en: "Very comfortable", ar: "مرتاح جدًا" } },
    },
    {
      id: "trust_handled",
      theme: "trust",
      type: "single",
      prompt: {
        en: "Do you trust that your reports are handled responsibly?",
        ar: "هل تثق بأن بلاغاتك يتم التعامل معها بمسؤولية؟",
      },
      options: [
        { value: "yes", label: { en: "Yes", ar: "نعم" } },
        { value: "unsure", label: { en: "Not sure", ar: "غير متأكد" } },
        { value: "no", label: { en: "No", ar: "لا" } },
      ],
    },
    {
      id: "trust_comment",
      theme: "trust",
      type: "multiple",
      required: false,
      prompt: {
        en: "What would make you trust these digital tools more? (Optional)",
        ar: "ما الذي قد يزيد من ثقتك بهذه الأدوات الرقمية؟ (اختياري)",
      },
      options: [
        { value: "show_results", label: { en: "Seeing proof that issues are fixed", ar: "رؤية دليل على إصلاح المشاكل" } },
        { value: "data_privacy", label: { en: "Guarantees that my personal data is safe", ar: "ضمانات بأن بياناتي الشخصية آمنة" } },
        { value: "official_logo", label: { en: "Official government branding", ar: "وجود شعار أو ختم رسمي" } },
        { value: "better_comms", label: { en: "Clearer communications from the utility", ar: "تواصل أكثر وضوحاً من شركة المياه" } },
        { value: "none", label: { en: "No additional comments", ar: "لا توجد ملاحظات إضافية" } },
      ],
    },

    // ── Theme 3: Relevance ──
    {
      id: "rel_improve",
      theme: "relevance",
      type: "single",
      prompt: {
        en: "Could digital tools improve water management for you?",
        ar: "هل يمكن للأدوات الرقمية أن تحسّن إدارة المياه بالنسبة لك؟",
      },
      options: [
        { value: "yes", label: { en: "Yes", ar: "نعم" } },
        { value: "somewhat", label: { en: "Somewhat", ar: "إلى حدٍ ما" } },
        { value: "no", label: { en: "No", ar: "لا" } },
        { value: "unsure", label: { en: "Not sure", ar: "غير متأكد" } },
      ],
    },
    {
      id: "rel_which",
      theme: "relevance",
      type: "multiple",
      showIf: { questionId: "rel_improve", in: ["yes", "somewhat"] },
      prompt: {
        en: "Which of these would help you most? (Choose any.)",
        ar: "أي من هذه سيساعدك أكثر؟ (اختر ما ينطبق.)",
      },
      options: [
        { value: "faster_report", label: { en: "Faster way to report problems", ar: "طريقة أسرع للإبلاغ عن المشاكل" } },
        { value: "outage_alerts", label: { en: "Alerts about water cut-offs", ar: "تنبيهات عن انقطاع المياه" } },
        { value: "billing", label: { en: "Clear billing information", ar: "معلومات واضحة عن الفواتير" } },
        { value: "quality", label: { en: "Water quality information", ar: "معلومات عن جودة المياه" } },
        { value: "contact", label: { en: "Easier contact with the provider", ar: "تواصل أسهل مع مزوّد الخدمة" } },
        { value: "other", label: { en: "Other", ar: "أخرى" } },
      ],
    },
    {
      id: "rel_comment",
      theme: "relevance",
      type: "multiple",
      required: false,
      prompt: {
        en: "How could technology improve water management for you? (Optional)",
        ar: "كيف يمكن للتكنولوجيا أن تحسّن إدارة المياه بالنسبة لك؟ (اختياري)",
      },
      options: [
        { value: "live_schedules", label: { en: "Live schedules of water supply", ar: "مواعيد حية لتوزيع المياه" } },
        { value: "outage_alerts", label: { en: "Immediate notifications about cuts", ar: "تنبيهات فورية عن انقطاع المياه" } },
        { value: "easy_payment", label: { en: "Easier online bill payments", ar: "دفع الفواتير إلكترونياً بشكل أسهل" } },
        { value: "report_photo", label: { en: "Option to upload photos of leaks", ar: "إمكانية تحميل صور للتسريبات" } },
        { value: "none", label: { en: "No additional comments", ar: "لا توجد ملاحظات إضافية" } },
      ],
    },

    // ── Theme 4: Challenges ──
    {
      id: "chal_what",
      theme: "challenges",
      type: "multiple",
      prompt: {
        en: "What makes digital water tools hard to use? (Choose any.)",
        ar: "ما الذي يجعل الأدوات الرقمية للمياه صعبة الاستخدام؟ (اختر ما ينطبق.)",
      },
      options: [
        { value: "internet", label: { en: "Internet cost or coverage", ar: "تكلفة الإنترنت أو ضعف التغطية" } },
        { value: "language", label: { en: "Language", ar: "اللغة" } },
        { value: "reading", label: { en: "Reading or writing difficulty", ar: "صعوبة القراءة أو الكتابة" } },
        { value: "device", label: { en: "No suitable phone or device", ar: "عدم توفر هاتف أو جهاز مناسب" } },
        { value: "trust", label: { en: "Not trusting them", ar: "عدم الثقة بها" } },
        { value: "complex", label: { en: "The tools are too complicated", ar: "الأدوات معقّدة جدًا" } },
        { value: "none", label: { en: "No difficulties", ar: "لا توجد صعوبات" } },
        { value: "other", label: { en: "Other", ar: "أخرى" } },
      ],
    },
    {
      id: "chal_comment",
      theme: "challenges",
      type: "multiple",
      required: false,
      prompt: {
        en: "Tell us about a difficulty you have faced. (Optional)",
        ar: "أخبرنا عن صعوبة واجهتها. (اختياري)",
      },
      options: [
        { value: "poor_internet", label: { en: "Poor mobile coverage/internet speed", ar: "ضعف التغطية أو سرعة الإنترنت" } },
        { value: "hard_arabic", label: { en: "Complex or formal language", ar: "لغة معقدة أو رسمية جداً" } },
        { value: "typing_issues", label: { en: "Difficulty typing on a mobile screen", ar: "صعوبة الكتابة على شاشة الهاتف" } },
        { value: "internet_cost", label: { en: "High cost of mobile data packages", ar: "ارتفاع تكلفة حزم البيانات" } },
        { value: "none", label: { en: "No additional comments", ar: "لا توجد ملاحظات إضافية" } },
      ],
    },

    // ── Theme 5: Impact & feedback ──
    {
      id: "imp_result",
      theme: "impact",
      type: "single",
      prompt: {
        en: "When you reported a water issue digitally, did it lead to any improvement?",
        ar: "عندما أبلغت عن مشكلة مياه بشكل رقمي، هل أدى ذلك إلى أي تحسّن؟",
      },
      options: [
        { value: "yes", label: { en: "Yes, it improved", ar: "نعم، تحسّن الوضع" } },
        { value: "partly", label: { en: "Partly", ar: "جزئيًا" } },
        { value: "no", label: { en: "No change", ar: "لا تغيير" } },
        { value: "never", label: { en: "I have never reported", ar: "لم أبلّغ من قبل" } },
      ],
    },
    {
      id: "imp_satisfaction",
      theme: "impact",
      type: "scale",
      showIf: { questionId: "imp_result", in: ["yes", "partly", "no"] },
      prompt: {
        en: "How satisfied were you with the response you received?",
        ar: "ما مدى رضاك عن الاستجابة التي تلقيتها؟",
      },
      scaleLabels: { low: { en: "Not satisfied", ar: "غير راضٍ" }, high: { en: "Very satisfied", ar: "راضٍ جدًا" } },
    },
    {
      id: "imp_comment",
      theme: "impact",
      type: "multiple",
      required: false,
      prompt: {
        en: "Anything else about whether reporting water issues leads to change? (Optional)",
        ar: "أي شيء آخر حول ما إذا كان الإبلاغ عن مشاكل المياه يؤدي إلى تغيير؟ (اختياري)",
      },
      options: [
        { value: "fixed_quickly", label: { en: "Issues are fixed quickly after reporting", ar: "يتم إصلاح المشاكل بسرعة بعد الإبلاغ" } },
        { value: "ignored_reports", label: { en: "My reports are ignored or delayed", ar: "يتم تجاهل بلاغاتي أو تأخيرها" } },
        { value: "billing_only", label: { en: "They fix bills quickly but leaks slowly", ar: "يصلحون الفواتير بسرعة والتسريبات بتبلد" } },
        { value: "no_benefit", label: { en: "No visible benefit from reporting", ar: "لا توجد فائدة ملموسة من الإبلاغ" } },
        { value: "none", label: { en: "No additional comments", ar: "لا توجد ملاحظات إضافية" } },
      ],
    },
    {
      id: "gen_feedback",
      theme: "impact",
      type: "freetext",
      required: false,
      prompt: {
        en: "Do you have any other feedback or comments you want to share with us? (Optional)",
        ar: "هل لديك أي ملاحظات أو تعليقات أخرى تود مشاركتها معنا؟ (اختياري)",
      },
    },
  ],
};
