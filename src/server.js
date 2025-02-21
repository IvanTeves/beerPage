// Importamos las dependencias necesarias
const express = import('express');
const mercadopago = import('mercadopago');

const app = express();

// Configura el access token de Mercado Pago (puede ser de prueba o producción)
mercadopago.configurations.setAccessToken('TU_ACCESS_TOKEN_AQUI');

// Middleware para parsear JSON y datos de formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint para procesar el pago
app.post('/process_payment', async (req, res) => {
  // Recibimos los datos del front-end
  const paymentData = req.body;

  try {
    // Llamamos a la API de Mercado Pago para crear el pago
    const response = await mercadopago.payment.create(paymentData);
    // Retornamos la respuesta al front-end
    res.status(200).json(response);
  } catch (error) {
    // Manejo de errores
    console.error('Error al procesar el pago:', error);
    res.status(500).json({ error: error.message });
  }
});

// Levantamos el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
