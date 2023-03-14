from reportlab.pdfgen import canvas


def generate_certificate(name, event, date):
    # Open the certificate template
    template = canvas.Canvas("certificate_template.pdf")

    # Fill in the placeholders with dynamic data
    template.drawString(100, 500, name)
    template.drawString(100, 450, event)
    template.drawString(100, 400, date)

    # Save the generated PDF certificate
    template.save()
