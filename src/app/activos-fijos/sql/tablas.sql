-- SISTEMA DE ACTIVOS FIJOS

-- Tabla usuarios:
CREATE TABLE activos.usuarios (
    id VARCHAR(8) NOT NULL DEFAULT substring(gen_random_uuid()::text from 1 for 8),
    nombre VARCHAR(128),
    primer_apellido VARCHAR(128),
    segundo_apellido VARCHAR(128),
    correo_institucional text,    
    celular VARCHAR(16),  
    interno VARCHAR(8),
    usuario VARCHAR(100),
    password VARCHAR(100) DEFAULT md5('123456'),
    estado VARCHAR(1) DEFAULT 'A', -- A: Activo, I: Inactivo
    rol VARCHAR(64) DEFAULT 'INVITADO', -- ADMIN: Administrador, USUA: Usuario, AUDI: Auditor
    -- primary key
    CONSTRAINT pk_usuarios PRIMARY KEY (id)
);

-- Tabla activos:
CREATE TABLE activos.activos (
    id_activo SERIAL NOT NULL,
    codigo VARCHAR(128),
    descripcion TEXT,
    serie VARCHAR(64),
    observaciones TEXT,
    id_estado INT,
    id_unidad INT,
    estado_asignacion_activo VARCHAR(1) DEFAULT 'DISPONIBLE', -- DISPONIBLE, ASIGNADO   
    -- primary key
    CONSTRAINT pk_activos PRIMARY KEY (id_activo)    
);

-- Tabla estados:
CREATE TABLE activos.estados (
    id_estado SERIAL NOT NULL,
    descripcion VARCHAR(32) DEFAULT 'BUENO', -- BUENO, MALO, REGULAR, NO DEFINIDO, BAJA
    valor SERIAL,
    -- primary key
    CONSTRAINT pk_estados PRIMARY KEY (id_estado)
);

-- Tabla unidades:
CREATE TABLE activos.unidades (
    id_unidad SERIAL NOT NULL,
    nombre VARCHAR(128), -- Ejemplo: pieza, kilogramo, litro, metro, etc.
    simbolo VARCHAR(8), -- Ejemplo: pz, kg, lt, m, etc.
    -- primary key
    CONSTRAINT pk_unidades PRIMARY KEY (id_unidad)
);