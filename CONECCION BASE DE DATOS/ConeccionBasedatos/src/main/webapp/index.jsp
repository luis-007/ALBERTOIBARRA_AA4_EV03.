<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="styles.css">
    <title>registro de usuarios</title>
    <style>
        /* Estilos personalizados */
        form {
            width: 50vw;
            margin: 0 auto;
            padding: 20px;
            text-align: center;
        }

        h1 {
            text-align: center;
        }

        /* Estilos para botón */
        .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
        }

        .btn-primary:hover {
            background-color: #0056b3;
            border-color: #0056b3;
        }

        /* Estilos para etiquetas de los campos de entrada */
        .form-label {
            color: #007bff;
            font-weight: bold;
        }

        /* Estilos para los campos de entrada */
        .form-control {
            border-color: #007bff;
        }

        /* Estilos para el contenedor del formulario */
        .form-container {
            margin-top: 50px;
        }
    </style>
</head>
<body>
    <div class="container form-container">
        <h1>Base de Datos (Post)</h1>
        <form>
            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre Usuario</label>
                <input type="text" class="form-control" id="nombre" placeholder="Digite su nombre" required>                         
            </div>
            <div class="mb-3">
                <label for="apellido" class="form-label">Apellido Usuario</label>
                <input type="text" class="form-control" id="apellido" placeholder="Digite su apellido" required>                 
            </div> 
            <button type="submit" class="btn btn-primary">Enviar Datos</button>                   
        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>
</html>