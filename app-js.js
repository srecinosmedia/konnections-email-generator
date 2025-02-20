// Card components
const Card = ({ children, className }) => (
  <div className={`bg-white shadow-lg rounded-lg ${className || ''}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="px-6 py-4 border-b border-gray-200">
    {children}
  </div>
);

const CardTitle = ({ children }) => (
  <h2 className="text-xl font-semibold text-gray-800">
    {children}
  </h2>
);

const CardContent = ({ children, className }) => (
  <div className={`px-6 py-4 ${className || ''}`}>
    {children}
  </div>
);

// Main component
const KonnectionsEmailGenerator = () => {
  const [formData, setFormData] = React.useState({
    recipientName: '',
    recipientEmail: 'srecinosmedia@gmail.com',
    eventName: 'BGCCC Ribbon Cutting Event',
    careerField: 'hair stylist',
    interestingDetail: 'love to cook and how you got started',
    representingCompany: "desert's best friend's closet",
    businessDescription: 'A freelance photographer',
    signature: 'Steven Recinos',
    imageUrls: ''
  });

  const [copied, setCopied] = React.useState(false);

  const handleInputChange = React.useCallback((field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const generateEmail = React.useCallback(() => {
    const data = {
      recipientName: formData.recipientName || '[Name]',
      eventName: formData.eventName || '[Event Name]',
      careerField: formData.careerField || '[Career Field]',
      interestingDetail: formData.interestingDetail || '[Interesting Detail]',
      representingCompany: formData.representingCompany || '[Company Name]',
      businessDescription: formData.businessDescription || '[Business Description]',
      signature: formData.signature || '[Your Name]'
    };

    return `Hello ${data.recipientName},

It was nice meeting you at the ${data.eventName} event. I enjoyed learning how you chose your career in ${data.careerField}. I found it very interesting how you ${data.interestingDetail}.

I'm enjoying earning my networking certification for my resume! Meeting experienced business professionals like you and representing ${data.representingCompany} has been an awesome learning experience.

${data.businessDescription}

Please keep Konnections Certification in mind if you would like for us to connect you with someone from our next generation to represent you!

Let us know if you know anyone starting out that would benefit from earning their certificate in networking and people skills for their resume.

[Photos will be inserted here]

Sincerely,
${data.signature}
Konnectee with Konnections Certification Inc.
Representing ${data.representingCompany}`;
  }, [formData]);

  const handleCopyToClipboard = React.useCallback(() => {
    navigator.clipboard.writeText(generateEmail());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [generateEmail]);

  const getGmailUrl = React.useCallback(() => {
    const subject = encodeURIComponent(`Follow-up from ${formData.eventName || '[Event]'}`);
    const body = encodeURIComponent(generateEmail());
    const to = encodeURIComponent(formData.recipientEmail || '');
    const cc = encodeURIComponent('kimberly@konnectionscertification.com,stenorio54@hotmail.com,stevenrecinos2001@gmail.com');
    return `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${to}&cc=${cc}&su=${subject}&body=${body}&tf=1`;
  }, [formData, generateEmail]);

  const handleOpenGmail = React.useCallback(() => {
    window.open(getGmailUrl(), '_blank');
  }, [getGmailUrl]);

  const getMailtoUrl = React.useCallback(() => {
    const subject = encodeURIComponent(`Follow-up from ${formData.eventName || '[Event]'}`);
    const body = encodeURIComponent(generateEmail());
    const to = encodeURIComponent(formData.recipientEmail || '');
    const cc = encodeURIComponent('kimberly@konnectionscertification.com,stenorio54@hotmail.com,stevenrecinos2001@gmail.com');
    return `mailto:${to}?cc=${cc}&subject=${subject}&body=${body}`;
  }, [formData, generateEmail]);

  return (
    <Card className="max-w-3xl mx-auto my-8">
      <CardHeader>
        <CardTitle>Konnections Certification Follow-up Email Generator</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium">Recipient Name:</label>
            <input
              type="text"
              value={formData.recipientName}
              onChange={(e) => handleInputChange('recipientName', e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter recipient's name"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Recipient Email:</label>
            <input
              type="email"
              value={formData.recipientEmail}
              onChange={(e) => handleInputChange('recipientEmail', e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter recipient's email"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Event Name:</label>
            <input
              type="text"
              value={formData.eventName}
              onChange={(e) => handleInputChange('eventName', e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter event name"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Career Field:</label>
            <input
              type="text"
              value={formData.careerField}
              onChange={(e) => handleInputChange('careerField', e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter their career field"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Interesting Detail:</label>
            <input
              type="text"
              value={formData.interestingDetail}
              onChange={(e) => handleInputChange('interestingDetail', e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter interesting detail from conversation"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Representing Company:</label>
            <input
              type="text"
              value={formData.representingCompany}
              onChange={(e) => handleInputChange('representingCompany', e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter company being represented"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium">Your Signature:</label>
            <input
              type="text"
              value={formData.signature}
              onChange={(e) => handleInputChange('signature', e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your name/signature"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Business Description:</label>
          <textarea
            value={formData.businessDescription}
            onChange={(e) => handleInputChange('businessDescription', e.target.value)}
            className="w-full p-2 border rounded h-24"
            placeholder="Enter brief description of the business you represented"
          />
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          <button
            onClick={handleOpenGmail}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            <span className="lucide-mail"></span>
            Open in Gmail
          </button>

          <a
            href={getMailtoUrl()}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            <span className="lucide-globe"></span>
            Open in Default Email App
          </a>

          <button
            onClick={handleCopyToClipboard}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            <span className={copied ? "lucide-check" : "lucide-copy"}></span>
            {copied ? 'Copied!' : 'Copy to Clipboard'}
          </button>
        </div>

        <div className="mt-6">
          <div className="text-sm font-medium mb-2">Generated Email:</div>
          <div className="p-4 bg-gray-50 rounded whitespace-pre-wrap font-mono text-sm">
            {generateEmail()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Mount the application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<KonnectionsEmailGenerator />);